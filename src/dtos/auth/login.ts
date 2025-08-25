type LoginRequest = {
    email: string;
    password: string;
    browser2FaPersisted: boolean;
    browser2FaPersistenceToken: string;
}
type AuthResponse = {
    AccessToken:string,
    RefreshToken:string
}
type LoginResponse = {
    requiresTwoFactor: boolean;
    authResponse: AuthResponse;
    browserPersisted: boolean;
    BrowserToken: string;
}
type LoginWith2FaRequest = {
    userName: string;
    password?: string;
    twoFactorCode: string;
    rememberBrowser: boolean;
}
type LoginWith2FaResponse = {
    authResponse: AuthResponse;
}