import camelcaseKeys from "camelcase-keys";
import {TResult} from "./result";

export class ApiResponseWrapper<T> implements TResult<T> {
    isSuccessStatusCode: boolean;
    statusCode: number;
    apiSuccessResponse?: ApiSuccessResponse<T>;
    apiErrorResponse?: ApiErrorResponse;

    constructor(isSuccessStatusCode: boolean, statusCode: number, apiSuccessResponse?: ApiSuccessResponse<T>, apiErrorResponse?: ApiErrorResponse) {
        this.isSuccessStatusCode = isSuccessStatusCode;
        this.statusCode = statusCode;
        this.apiSuccessResponse = apiSuccessResponse;
        this.apiErrorResponse = apiErrorResponse;
    }

    static ok<T>(data: any, status?: number): ApiResponseWrapper<T> {
        return new ApiResponseWrapper<T>(true, status ?? 200, new ApiSuccessResponse<T>(data.message, data.payload));
    }

    static fail<T>(data: any, status?: number): ApiResponseWrapper<T> {
        if (typeof data === 'string') {
            return new ApiResponseWrapper<T>(false, status ?? 500, undefined, new ApiErrorResponse(undefined, data));
        } else if (typeof data === 'object') {
            return new ApiResponseWrapper<T>(false, status ?? 500, undefined, new ApiErrorResponse(data.title, data.errorMessage, data.innerException, data.validationErrors));
        }
        return new ApiResponseWrapper<T>(false, status ?? 500, undefined, new ApiErrorResponse(undefined, "An error occured while processing your request"));
    }

    static async parse<T>(res: Response): Promise<ApiResponseWrapper<T>> {
        const data = camelcaseKeys(await res.json(), {deep: true});
        if (!res.ok) {
            return ApiResponseWrapper.fail<T>(data, res.status);
        }
        return ApiResponseWrapper.ok<T>(data, res.status);
    }

    get success(): boolean {
        return this.isSuccessStatusCode;
    }

    get payload(): T | undefined {
        return this.isSuccessStatusCode ? this.apiSuccessResponse?.payload : undefined;
    }

    get message(): string | undefined {
        return this.isSuccessStatusCode ? this.apiSuccessResponse?.successMessage : this.apiErrorResponse?.getErrorMessage();
    }

}

export class ApiSuccessResponse<T> {
    successMessage: string;
    payload: T;

    constructor(successMessage: string, payload: T) {
        this.successMessage = successMessage;
        this.payload = payload;
    }
}

export class ApiErrorResponse {
    title?: string;
    errorMessage?: string;
    innerException?: string;
    validationErrors?: ValidationError[];

    constructor(title?: string, errorMessage?: string, innerException?: string, validationErrors?: ValidationError[]) {
        this.title = title;
        this.errorMessage = errorMessage;
        this.innerException = innerException;
        this.validationErrors = validationErrors;
    }

    getErrorMessage(): string {
        let error;
        error = this.validationErrors?.[0]?.reason;
        if (error) {
            return error;
        }

        if (this.errorMessage) {
            return this.errorMessage;
        }

        if (this.title) {
            return this.title;
        }

        return "An error occured while processing your request";
    }

}

class ValidationError {
    name: string;
    reason: string;

    constructor(name: string, reason: string) {
        this.name = name;
        this.reason = reason;
    }
}


