type TResult<T> = {
    success: boolean;
    data?: T;
    message?: string;
};