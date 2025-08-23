
import { makeAutoObservable} from "mobx";
import { inject } from "react-ioc";
import { ApiService } from "@/core/api";
import { NavigationService } from "@/components/NavigationService";

export class AuthStore {
    apiService = inject(this, ApiService);
    navigator = inject(this, NavigationService);
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

   async loginDummy() {
        // await task delay 1000
        var delay = new Promise(resolve => setTimeout(resolve, 1000));
        await delay;
        this.isAuthenticated = true;
        this.navigator.navigate('/chat/new');
    }
    async login(user: string, password: string){
        const res = await this.apiService.post<string>('/login', {
            user,
            password,
        });
        if (res.success && res.data) {
            localStorage.setItem('token', res.data);
            this.isAuthenticated = true;
        }
        return {
            success: res.success,
            data: res.data,
        };
    }
    async logout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

}
