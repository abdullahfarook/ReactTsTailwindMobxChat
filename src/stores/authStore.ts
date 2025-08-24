
import { makeAutoObservable, runInAction} from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";
import { Validator } from "fluentvalidation-ts";
export type LoginFormModel = { email: string, password: string };
class LoginFormValidator extends Validator<LoginFormModel> {
  constructor() {
    super();
    this.ruleFor('email')
        .notEmpty()
        .withMessage('Please enter your email')
        .emailAddress()
        .withMessage('Please enter a valid email');

    this.ruleFor('password')
        .notEmpty()
        .withMessage('Please enter your password');
  }
}


export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated: boolean = false;
    loginValidator = new LoginFormValidator();
    loginFormModel: LoginFormModel = { email: "", password: "" };
    error?: string | null = null;
    get hasError() {
        return this.error != null;
    }
    constructor() {
        makeAutoObservable(this);
    }


   async loginDummy() {
        // await task delay 1000
        const delay = new Promise(resolve => setTimeout(resolve, 1000));
        await delay;
        this.isAuthenticated = true;
        this.navigator.goBack();
    }
    async login(user: string, password: string){
        this.error = null;
        const res = await this.apiService.post<string>('/login', {
            user,
            password,
        });
        if (res.success && res.data) {
            localStorage.setItem('token', res.data);
            this.isAuthenticated = true;
        }
        runInAction(() => {
            this.error = res.message;
        });
    }
    async logout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

}

