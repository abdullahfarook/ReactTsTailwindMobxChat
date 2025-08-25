
type TResult<T= void> = {
    success: boolean;
    payload?: T;
    message?: string;
};