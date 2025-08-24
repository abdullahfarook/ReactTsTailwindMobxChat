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

type Login = {
    email: string;
    password: string;
    browser2FaPersisted: boolean;
    browser2FaPersistenceToken: string;
}