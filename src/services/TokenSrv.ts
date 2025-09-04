import {jwtDecode} from "jwt-decode";
import {ApiResponseWrapper} from "@/models/responseWrapper";
import {API_URL, defaultHeaders} from "./ApiSrv";
import {computed, makeObservable, observable, runInAction} from "mobx";
import {toSubscribable} from "@/core/utils";

export class TokenSrv {
    private refreshSf = new SingleFlight<boolean>();
    private readonly tokenClockSkewSeconds: number = 30;
    _accessToken: string | null = null;
    accessToken$ = toSubscribable(this, s => s._accessToken);

    constructor() {
        makeObservable(this, {
            _accessToken: observable,
        });
    }

    private get accessToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    private get refreshToken(): string | null {
        return localStorage.getItem('refreshToken');
    }

    async getAccessTokenAsync(): Promise<string | null> {
        await this.ensureValidAccessToken();
        return localStorage.getItem('accessToken');
    }

    getAuthHeader(): Record<string, string> {
        const token = this.accessToken;
        return token ? {Authorization: "Bearer " + token} : {};
    }

    storeTokens(accessToken: string, refreshToken: string) {
        console.log('storeTokens');
        localStorage.setItem('accessToken', accessToken);
        runInAction(() => this._accessToken = accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }

    clearTokens() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    isAccessTokenExpired(): boolean {
        const token = this.accessToken;
        if (!token) return true;
        try {
            const parsed: any = jwtDecode(token as any);
            const exp: number = parsed?.exp ?? 0;
            if (!exp) return true;
            const nowSeconds = Math.floor(Date.now() / 1000);
            return exp - this.tokenClockSkewSeconds <= nowSeconds;
        } catch {
            return true;
        }
    }

    async ensureValidAccessToken() {
        if (!this.accessToken || !this.refreshToken) return;
        if (!this.isAccessTokenExpired()) return;
        await this.refreshTokensSingleFlight();
    }

    async refreshTokensSingleFlight(): Promise<boolean> {
        return this.refreshSf.run(async () => {
            const accessToken = this.accessToken ?? '';
            const refreshToken = this.refreshToken ?? '';
            if (!accessToken || !refreshToken) {
                // this.clearTokens();
                return false;
            }
            const url = `${API_URL}/api/identity/account/RefreshToken`;
            const body = JSON.stringify({accessToken, refreshToken});
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    body,
                    headers: defaultHeaders(),
                });
                const result = await ApiResponseWrapper.parse<AuthResponse>(res);
                if (result.isSuccessStatusCode) {
                    this.storeTokens(result.payload!.accessToken, result.payload!.refreshToken);
                    return true;
                } else {
                    // this.clearTokens();
                    return false;
                }
            } catch {
                // this.clearTokens();
                return false;
            }
        });
    }
}


export class SingleFlight<T> {
    private promise: Promise<T> | null = null;

    run(fn: () => Promise<T>): Promise<T> {
        if (this.promise) return this.promise;
        this.promise = (async () => {
            try {
                return await fn();
            } finally {
                this.promise = null;
            }
        })();
        return this.promise;
    }
}
