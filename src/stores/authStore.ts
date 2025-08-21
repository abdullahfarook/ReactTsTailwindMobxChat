import api from "@/core/api";
import { makeAutoObservable, observable, runInAction } from "mobx";
import { useNavigate} from "react-router-dom";

class AuthStore {
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

   async loginDummy(user: string, password: string) {
        // await task delay 1000
        var delay = new Promise(resolve => setTimeout(resolve, 1000));
        await delay;
        this.isAuthenticated = true;

    }
    async login(user: string, password: string) {
        const res = await api.fetchPost<any>('/login', {
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

const authStore = new AuthStore();
export default authStore;