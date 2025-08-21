type TResult<T> = {
    success: boolean;
    data?: T | null;
    message?: string | null;
};