import {makeAutoObservable, runInAction} from "mobx";
import {inject} from "react-ioc";
import {ApiSrv} from "@/services/ApiSrv";
import {NavigationSrv} from "@/services/NavigationSrv";
import {Session} from "./Session";
import {TokenSrv} from "@/services/TokenSrv";

export class AuthStore {
    apiService = inject(this, ApiSrv);
    navigator = inject(this, NavigationSrv);
    session = inject(this, Session);
    tokenService = inject(this, TokenSrv);
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
        const isRefreshed = await this.tokenService.refreshTokensSingleFlight();
        runInAction(() => {
            this.isAuthenticating = false;
            if (!isRefreshed) return;
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
            browser2FaPersistenceToken: browserToken
        }
        const res = await this.apiService.post<LoginResponse>('/identity/account/Login', req);
        if (!res.success) return res;
        if (res.payload?.requiresTwoFactor) {
            this.loginRequest = req;
            this.navigator.navigate('/login/2fa');
            return;
        }

        const auth = res.payload!.authResponse;
        this.tokenService.storeTokens(auth.accessToken, auth.refreshToken);

        runInAction(() => this.isAuthenticated = true);
        this.navigator.goBack();

    }

    async login2fa(code: string) {
        const req: LoginWith2FaRequest = {
            userName: this.loginRequest!.email,
            password: this.loginRequest!.password,
            twoFactorCode: code,
            rememberBrowser: true,
        };
        const res = await this.apiService.post<LoginWith2FaResponse>('/identity/account/LoginWith2Fa', req);
        if (!res.success) return res;

        const auth = res.payload!.authResponse;
        this.tokenService.storeTokens(auth.accessToken, auth.refreshToken);

        runInAction(() => {
            this.isAuthenticated = true
            this.loginRequest = undefined;
        });
        this.navigator.navigate('/', {replace: true});

    }

    logout() {
        this.session.removeSession();
        this.navigator.navigate('/login', {replace: true});
    }
}

