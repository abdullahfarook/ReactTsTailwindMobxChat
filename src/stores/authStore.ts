
import { makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated = false;
    isAuthenticating = true;
    lastReq?:any;
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

    async login(user: string, password: string) {
        const browserToken = localStorage.getItem(user);
        const isPersisted = browserToken != null;
        const req: LoginRequest = {
            email: user,
            password: password,
            browser2FaPersisted: isPersisted,
            browser2FaPersistenceToken: browserToken ?? ''
        }
        const res = await this.apiService.post<LoginResponse>('/identity/account/Login', req);
        if (!res.success) return res;
        if (res.payload?.requiresTwoFactor){
            this.lastReq = res;
            this.navigator.navigate('/login/2fa/'+user);
            return;
        }
        localStorage.setItem('token', res.payload!.authResponse.AccessToken);
        runInAction(() => this.isAuthenticated = true);
        this.navigator.goBack();

    }

    async login2fa(code: string, email: string) {
        var req: LoginWith2FaRequest = {
            userName: email,
            twoFactorCode: code,
            rememberBrowser: true,
        }
        if(this.lastReq?.password) req.password = this.lastReq.password;
        const res = await this.apiService.post<LoginWith2FaResponse>('/identity/account/LoginWith2Fa', req);
        if (!res.success) return res;

        localStorage.setItem('token', res.payload!.authResponse.AccessToken);
        runInAction(() => this.isAuthenticated = true);
        this.navigator.goBack(-2);

    }
    
    logout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

}

