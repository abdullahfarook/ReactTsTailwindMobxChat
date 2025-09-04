import {ApiSrv} from "@/services/ApiSrv";
import {makeObservable, observable, reaction, runInAction} from "mobx";
import {inject} from "react-ioc";
import {jwtDecode} from "jwt-decode";
import camelcaseKeys from "camelcase-keys";
import {TokenSrv} from "@/services/TokenSrv";

export class Session {
    api = inject(this, ApiSrv);
    token = inject(this, TokenSrv);
    isAuthenticated = false;
    userId!: string;
    fullName!: string;

    get firstName(): string {
        return this.fullName?.split(' ')?.[0];
    }

    constructor() {
        makeObservable(this, {isAuthenticated: observable});
        this.watchForTokenChanges();
    }

    setSession(accessToken: string | null) {
        if (accessToken) {
            this.createSession(accessToken);
            runInAction(() => this.isAuthenticated = true);
        }
    }

    get tokens(): AuthResponse {
        return {
            accessToken: localStorage.getItem('accessToken')!,
            refreshToken: localStorage.getItem('refreshToken')!,
        }
    }

    removeSession() {
        this.token.clearTokens();
        this.setFields({} as any);
        this.isAuthenticated = false;
    }

    private createSession(token: string) {
        const parsed = camelcaseKeys(jwtDecode<any>(token));
        ;
        this.setFields(parsed);
    }

    private setFields(parsed: any) {
        this.userId = parsed.sub;
        this.fullName = parsed.fullName;
    }

    private watchForTokenChanges() {
        this.token.accessToken$.subscribe((accessToken: string | null) => {
            if (accessToken) {
                this.setSession(accessToken);
            }
        });
    }
}