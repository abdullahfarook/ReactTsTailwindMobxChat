// namespace BinaryPlate.BlazorPlate.Tdap.Features.Identity.Account.Commands.Login;

// public class LoginCommand
// {
//     #region Public Properties

//     public string Email { get; set; }
//     public string Password { get; set; }
//     public bool Browser2FaPersisted { get; set; }
//     public string Browser2FaPersistenceToken { get; set; }

//     #endregion Public Properties
// }

type LoginRequest = {
    email: string;
    password: string;
    browser2FaPersisted: boolean;
    browser2FaPersistenceToken: string;
}
// public class LoginResponse
// {
//     #region Public Properties

//     public bool RequiresTwoFactor { get; set; }
//     public bool BrowserPersisted { get; set; }
//     public string BrowserToken { get; set; }
//     public AuthResponse AuthResponse { get; set; }
//     public bool RequiresTenantLogin { get; set; }
//     public TenantAuthResponse TenantAuthResponse { get; set; }
//     #endregion Public Properties
// }

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