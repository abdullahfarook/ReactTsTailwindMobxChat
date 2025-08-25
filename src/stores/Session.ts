import { ApiService } from "@/core/api";
import { action, makeObservable, observable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { jwtDecode } from "jwt-decode";
import camelcaseKeys from "camelcase-keys";
export class SessionStore {
    api = inject(this, ApiService);
    isAuthenticated = false;
    userId!: string;
    fullName!: string;

    get firstName(): string {
        return this.fullName?.split(' ')?.[0];
    }
    
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

    removeSession() {
        this.removeTokens();
        this.setFields({} as any);
        this.isAuthenticated = false;
    }

    private createSession(token: string) {
        const parsed = camelcaseKeys(jwtDecode<any>(token));;
        this.setFields(parsed);
    }

    private setFields(parsed: any) {
        this.userId = parsed.sub;
        this.fullName = parsed.fullName;
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