import { ApiErrorResponse, ApiResponseWrapper, ApiSuccessResponse } from "@/models/responseWrapper";
import camelcaseKeys from "camelcase-keys";

export class ApiService {
    baseUrl: string = "https://fd3147f39df6.ngrok-free.app";
    // constructor(url: string) {
    //     if (!url || url == '') throw new Error('BaseApi: url is required');
    //     this.baseUrl = url;
    // }
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
        input = `${this.baseUrl}/api${input}`;
        var headers = this.defaultHeaders();
        headers = this.tryAuthToken(headers);
        try {
            const res = await fetch(input, {
                headers: headers,
                ...init,
            });
            const data = camelcaseKeys(await res.json(), { deep: true });
            if (!res.ok) {
                return new ApiResponseWrapper<T>(false, res.status, undefined, new ApiErrorResponse(data?.title, data?.errorMessage, data?.innerException, data?.validationErrors));
            }
            return new ApiResponseWrapper<T>(true, res.status, new ApiSuccessResponse<T>(data?.successMessage, data?.payload), undefined);
        } catch (error: any) {
            var message = error?.message ?? "Error occured while fetching data";
            return new ApiResponseWrapper<T>(false, 0, undefined, new ApiErrorResponse(message, message));
        }

    }

    private defaultHeaders(): Record<string, string> {
        return {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
    }
    private tryAuthToken(headers: Record<string, string>): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.Authorization = "Bearer " + token;
        }
        return headers;
    }
}



// const api = new BaseApi(process.env.CATAILYST ?? '');
// const api = new BaseApi("http://localhost:5000");
// export default api;