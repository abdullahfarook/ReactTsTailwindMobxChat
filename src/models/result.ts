
type TResult<T= void> = {
    success: boolean;
    data?: T;
    message?: string;
};