
import { makeAutoObservable} from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/core/navigator";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

   async loginDummy() {
        // await task delay 1000
        var delay = new Promise(resolve => setTimeout(resolve, 1000));
        await delay;
        this.isAuthenticated = true;
        this.navigator.navigate('/chat/0');
    }
    async login(user: string, password: string): Promise<TResult<boolean>> {
        const res = await this.apiService.post<any>('/login', {
            user,
            password,
        });
        if (res.success) {
            localStorage.setItem('token', res.data.token);
            this.isAuthenticated = true;
        }
        return res;
    }
    async logout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

}
