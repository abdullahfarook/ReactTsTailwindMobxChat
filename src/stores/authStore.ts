import api from "@/core/api";
import { makeAutoObservable, observable, runInAction } from "mobx";


class AuthStore {
    private _isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }
    async login(user: string, password: string) {
        const res = await api.fetchPost<any>('/login', {
            user,
            password,
        });
        if (res.success) {
            localStorage.setItem('token', res.data.token);
            this._isAuthenticated = true;
        }
        return res;
    }
    async logout() {
        localStorage.removeItem('token');
        this._isAuthenticated = false;
    }
    get isAuthenticated() {
        return this._isAuthenticated;
    }

}

const authStore = new AuthStore();
export default authStore;