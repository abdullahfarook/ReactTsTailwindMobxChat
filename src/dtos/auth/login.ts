type LoginRequest = {
    email: string;
    password: string;
    browser2FaPersisted: boolean;
    browser2FaPersistenceToken: string;
}
type AuthResponse = {
    accessToken:string,
    refreshToken:string
}
type LoginResponse = {
    requiresTwoFactor: boolean;
    authResponse: AuthResponse;
    browserPersisted: boolean;
    browserToken: string;
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

type RememberBrowserRequest = {
    userName: string;
    browserPersisted: boolean;
    browserToken: string;
}
// public class RefreshTokenCommand
// {
//     #region Public Properties

//     public string AccessToken { get; set; }
//     public string RefreshToken { get; set; }

//     #endregion Public Properties
// }
type RefreshTokenRequest = {
    accessToken: string;
    refreshToken: string;
}