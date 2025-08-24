
import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";
import { FormValidator, IForm } from "@/models/iform";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated = false;
    isAuthenticating = true;
    constructor() {
        makeAutoObservable(this);
    }

    async init() {
        const token = localStorage.getItem('token');
        await new Promise(resolve => setTimeout(resolve, 1000));
        runInAction(() => {
            if (token) {
                this.isAuthenticated = true;
            }
            this.isAuthenticating = false;
        })

    }

    loginDummy(email: string, password: string) {
        // const delay = new Promise(resolve => setTimeout(resolve, 1000));
        // await delay;
        this.isAuthenticated = true;
        this.navigator.goBack();
    }
    

    async login(user: string, password: string) {
        const browserToken = localStorage.getItem(user);
        const req: LoginRequest = {
            email: user,
            password: password,
            browser2FaPersisted: browserToken != null,
            browser2FaPersistenceToken: browserToken ?? ''
        }
        const res = await this.apiService.post<LoginResponse>('/identity/account/Login', req);
        if (!res.success) return res;
        if(res.data?.requiresTwoFactor) return this.navigator.navigate('/login/2fa',);
        localStorage.setItem('token', res.data!.authResponse.AccessToken);
        runInAction(() => this.isAuthenticated = true );
        this.navigator.goBack();

    }

    async login2fa(code: string) {
        const res = await this.apiService.post<LoginResponse>('/identity/account/Login2fa', {
            code,
        });
        if (!res.success) return res;

        localStorage.setItem('token', res.data!.authResponse.AccessToken);
        runInAction(() => this.isAuthenticated = true);
        this.navigator.goBack(-2);

    }
    logout() {
        // localStorage.removeItem('token');
        this.isAuthenticated = false;
        console.log("logout");
    }

}

