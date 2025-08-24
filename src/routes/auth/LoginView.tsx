import { InputForm } from "@/components/Form";
import { AuthStore, LoginFormValidator } from "@/stores/AuthStore";
import { ErrorMessage, Field } from "formik";
import { observer } from "mobx-react";
import { provider, useInstance } from "react-ioc";
function LoginView() {
    const auth = useInstance(AuthStore);
    const validator = useInstance(LoginFormValidator);
    return (
        <div className="flex flex-grow items-center justify-center">
            <div className="w-authPageWidth overflow-hidden bg-white px-6 py-4 dark:bg-gray-900 sm:max-w-md sm:rounded-lg">
                <h1 className="mb-4 text-center text-3xl font-semibold text-black dark:text-white" style={{ "userSelect": "none" }}>Welcome back</h1>
                {validator.submitError && ServerError(validator.submitError!)}
                <InputForm
                    data={validator}
                    onSubmit={(val) => auth.loginDummy(val.email, val.password)}>
                        <div className="mb-4 mt-6">
                            <div className="relative">
                                <Field type="text" id="email" autoComplete="email" name="email" className="webkit-dark-styles transition-color peer w-full rounded-2xl border border-border-light bg-surface-primary px-3.5 pb-2.5 pt-3 text-text-primary duration-200 focus:border-green-500 focus:outline-none" /><label htmlFor="email" className="absolute start-3 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-surface-primary px-2 text-sm text-text-secondary-alt duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600 dark:peer-focus:text-green-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Email address</label></div>
                            <div className="ml-3 text-red-700 transition-all text-sm">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="relative">
                                <Field type="password" id="password" autoComplete="password" name="password" className="webkit-dark-styles transition-color peer w-full rounded-2xl border border-border-light bg-surface-primary px-3.5 pb-2.5 pt-3 text-text-primary duration-200 focus:border-green-500 focus:outline-none" /><label htmlFor="email" className="absolute start-3 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-surface-primary px-2 text-sm text-text-secondary-alt duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600 dark:peer-focus:text-green-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Password</label></div>
                            <div className="ml-3 text-red-700 transition-all text-sm">
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div className="mt-6"><button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-surface-submit text-white hover:bg-surface-submit-hover px-4 py-2 h-12 w-full rounded-2xl" aria-label="Continue" data-testid="login-button">Continue</button></div>
                    </InputForm>
                    
                <p className="my-4 text-center text-sm font-light text-gray-700 dark:text-white"> Dont have an account? <a href="/register" className="inline-flex p-1 text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">Sign up</a></p>
            </div>
        </div>
    )
}

const ServerError = (error: string) => (
    <div role="alert" aria-live="assertive" className="relative mt-6 rounded-xl border border-red-500/20 bg-red-50/50 px-6 py-4 text-red-700 shadow-sm transition-all dark:bg-red-950/30 dark:text-red-100 text-sm">{error}</div>
)
export default provider(LoginFormValidator)(observer(LoginView));



