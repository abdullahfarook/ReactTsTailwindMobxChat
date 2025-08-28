import { ApiResponseWrapper} from "@/models/responseWrapper";
import { inject } from "react-ioc";
import { TokenSrv } from "./TokenSrv";
export const API_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://localhost:5001';
export class ApiSrv {
    baseUrl: string = API_URL;
    tokenService = inject(this, TokenSrv);
    public get<T>(input: RequestInfo): Promise<ApiResponseWrapper<T>> {
        return this.fetch<T>(input);
    }
    public post<T>(input: RequestInfo, body: any): Promise<ApiResponseWrapper<T>> {
        return this.fetch<T>(input, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }
    public put<T>(input: RequestInfo, body: any): Promise<ApiResponseWrapper<T>> {
        return this.fetch<T>(input, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }
    public patch<T>(input: RequestInfo, body: any): Promise<ApiResponseWrapper<T>> {
        return this.fetch<T>(input, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    }
    public delete<T>(input: RequestInfo): Promise<ApiResponseWrapper<T>> {
        return this.fetch<T>(input, {
            method: 'DELETE',
        });
    }

    private async fetch<T>(input: RequestInfo, init?: RequestInit): Promise<ApiResponseWrapper<T>> {
        input = `${API_URL}/api${input}`;
        const token = await this.tokenService.getAccessTokenAsync();
        var headers = {
            ...defaultHeaders(),
            ...(token ? { Authorization: "Bearer " + token } : {}),
            ...init?.headers,
        } as Record<string, string>;
        try {
            const res = await fetch(input, {
                headers: headers,
                ...init,
            });
            return ApiResponseWrapper.parse<T>(res);
        } catch (error: any) {
            var message = error?.message ?? "Error occured while fetching data";
            return ApiResponseWrapper.fail<T>(message, 500);
        }
    }


}
export function defaultHeaders(): Record<string, string> {
    return {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}