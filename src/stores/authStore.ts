
import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";
import { Validator } from "fluentvalidation-ts";
import { FormValidator, IForm } from "@/models/iform";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }

    loginDummy(email: string, password: string) {
        // const delay = new Promise(resolve => setTimeout(resolve, 1000));
        // await delay;
        this.isAuthenticated = true;
        this.navigator.goBack();
    }

    async login(user: string, password: string) {
        const res = await this.apiService.post<string>('/login', {
            user,
            password,
        });
        if (res.success && res.data) {
            localStorage.setItem('token', res.data);
            this.isAuthenticated = true;
        }
    }
    logout() {
        // localStorage.removeItem('token');
        this.isAuthenticated = false;
        console.log("logout");
    }

}

export type LoginFormModel = { email: string, password: string };
export class LoginFormValidator extends FormValidator<LoginFormModel> {

    model: LoginFormModel = { email: "", password: "" };
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