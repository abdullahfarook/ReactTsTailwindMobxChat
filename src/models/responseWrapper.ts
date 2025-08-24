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
    get success(): boolean {
        return this.isSuccessStatusCode;
    }
    get data(): T | undefined {
        return this.isSuccessStatusCode ? this.apiSuccessResponse?.payload : undefined;
    }
    get message(): string | undefined {
        return this.isSuccessStatusCode ? this.apiSuccessResponse?.successMessage : this.getApiFailureMessage();
    }
    getApiFailureMessage(): string {
        var error = null;
        error = this.apiErrorResponse?.validationErrors?.[0]?.reason;
        if (error) {
            return error;
        }

        if (this.apiErrorResponse?.errorMessage) {
            return this.apiErrorResponse.errorMessage;
        }

        if (this.apiErrorResponse?.title) {
            return this.apiErrorResponse.title;
        }

        return "An error occured while processing your request";
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
    title: string;
    errorMessage: string;
    innerException?: string;
    validationErrors?: ValidationError[];
    constructor(title: string, errorMessage: string, innerException?: string, validationErrors?: ValidationError[]) {
        this.title = title;
        this.errorMessage = errorMessage;
        this.innerException = innerException;
        this.validationErrors = validationErrors;
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


