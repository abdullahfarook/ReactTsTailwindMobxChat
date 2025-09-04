export type TResult<T = void> = {
    success: boolean;
    payload?: T;
    message?: string;
};

export function ok<T = void>(payload?: T): TResult<T> {
    return {
        success: true,
        payload: payload,
    }
}

export function fail<T = void>(message?: string): TResult<T> {
    return {
        success: false,
        message: message,
    }
}