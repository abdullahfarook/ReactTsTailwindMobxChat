import { ApiService } from "@/core/api";
import { action, makeObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { jwtDecode } from "jwt-decode";
export class SessionStore {
    api = inject(this, ApiService);
    isAuthenticated = false;
    userId!: string;
    fullName!: string;
    email!: string;
    
    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            setSession: action,
        });
    }
    get tokens(): AuthResponse {
        return {
            accessToken: localStorage.getItem('accessToken')!,
            refreshToken: localStorage.getItem('refreshToken')!,
        }
    }

    setSession(res: AuthResponse) {
        this.storeTokens(res);
        const token = res.accessToken;
        this.createSession(token);
        runInAction(() => this.isAuthenticated = true);
    }

    logout() {
        this.removeTokens();
        this.isAuthenticated = false;
    }

    private createSession(token: string) {
        const parsed = jwtDecode<any>(token);
        this.userId = parsed.sub;
        this.fullName = parsed.name;
        this.email = parsed.email;
    }
    private storeTokens(res: AuthResponse) {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
    }
    private removeTokens() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}