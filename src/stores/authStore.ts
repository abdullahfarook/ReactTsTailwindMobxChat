
import { makeAutoObservable, runInAction } from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";
import { SessionStore } from "./Session";
import { jwtDecode } from "jwt-decode";
import { fail, ok, TResult } from "@/models/result";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    session = inject(this, SessionStore);
    isAuthenticated = false;
    isAuthenticating = true;
    loginRequest?: LoginRequest;
    get isLoggedInCompleted(): boolean {
        return this.loginRequest != null;
    }
    constructor() {
        makeAutoObservable(this);
    }

    async init() {
        const res = await this.refreshSession();
        runInAction(() => {
            this.isAuthenticating = false;
            if (!res.success) return;
            this.isAuthenticated = true;
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
        if (res.payload?.requiresTwoFactor) {
            this.loginRequest = req;
            this.navigator.navigate('/login/2fa');
            return;
        }
        this.session.setSession(res.payload!.authResponse);
        runInAction(() => this.isAuthenticated = true);
        this.navigator.goBack();

    }

    async login2fa(code: string) {
        var req: LoginWith2FaRequest = {
            userName: this.loginRequest!.email,
            password: this.loginRequest!.password,
            twoFactorCode: code,
            rememberBrowser: true,
        }
        const res = await this.apiService.post<LoginWith2FaResponse>('/identity/account/LoginWith2Fa', req);
        if (!res.success) return res;
        var auth = res.payload!.authResponse;
        this.session.setSession(auth);
        runInAction(() => {
            this.isAuthenticated = true
            this.loginRequest = undefined;
        });
        this.navigator.navigate('/',{ replace: true });

    }
    logout() {
        this.session.removeSession();
        this.navigator.navigate('/login', { replace: true });
    }

    private async refreshSession(): Promise<TResult<string>> {
        // var token = this.session.tokens?.accessToken;
        // if (!token) return failed();
        // if (!this.isExpired(token)) return success(token);
        const tokens = await this.refreshAuthTokens();
        if (!tokens) return fail();
        this.session.setSession(tokens);
        return ok(this.session.tokens.accessToken);
    }
    private async refreshAuthTokens(): Promise<AuthResponse | undefined> {
        const req: RefreshTokenRequest = { ...this.session.tokens };
        const res = await this.apiService.post<AuthResponse>('/identity/account/RefreshToken', req);
        if (!res.success) return;
        return res.payload;
    }
    private isExpired(token: string): boolean {
        const parsed = jwtDecode<any>(token);
        const exp = parsed.exp;
        return exp < Date.now() / 1000;
    }
}

