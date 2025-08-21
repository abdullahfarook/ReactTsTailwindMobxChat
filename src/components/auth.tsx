export default function Auth() {
    return (
        <div id="root" style={{"padding":"25px"}} className="component-inspector-selected">
   <div className="relative flex min-h-screen flex-col bg-white dark:bg-gray-900" style={{}}>
      <div className="mt-6 h-10 w-full bg-cover">
        {/* <img src="/assets/logo.svg" className="h-full w-full object-contain" alt="LibreChat Logo" /> */}
        </div>
      <div className="absolute bottom-0 left-0 md:m-4">
         <div className="flex flex-col items-center justify-center bg-white pt-6 dark:bg-gray-900 sm:pt-0">
            <div className="absolute bottom-0 left-0 m-4">
               <button className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" aria-label="Switch to light theme" aria-keyshortcuts="Ctrl+Shift+T">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon" aria-hidden="true">
                     <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
         <div className="w-authPageWidth overflow-hidden bg-white px-6 py-4 dark:bg-gray-900 sm:max-w-md sm:rounded-lg">
            <h1 className="mb-4 text-center text-3xl font-semibold text-black dark:text-white" style={{"userSelect":"none"}}>Welcome back</h1>
            <form className="mt-6" aria-label="Login form" method="POST">
               <div className="mb-4">
                  <div className="relative"><input type="text" id="email" autoComplete="email" aria-label="Email" name="email" aria-invalid="false" className="webkit-dark-styles transition-color peer w-full rounded-2xl border border-border-light bg-surface-primary px-3.5 pb-2.5 pt-3 text-text-primary duration-200 focus:border-green-500 focus:outline-none" placeholder=" " /><label htmlFor="email" className="absolute start-3 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-surface-primary px-2 text-sm text-text-secondary-alt duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600 dark:peer-focus:text-green-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Email address</label></div>
               </div>
               <div className="mb-2">
                  <div className="relative"><input type="password" id="password" autoComplete="current-password" aria-label="Password" name="password" aria-invalid="false" className="webkit-dark-styles transition-color peer w-full rounded-2xl border border-border-light bg-surface-primary px-3.5 pb-2.5 pt-3 text-text-primary duration-200 focus:border-green-500 focus:outline-none" placeholder=" " /><label htmlFor="password" className="absolute start-3 top-1.5 z-10 origin-[0] -translate-y-4 scale-75 transform bg-surface-primary px-2 text-sm text-text-secondary-alt duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-green-600 dark:peer-focus:text-green-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">Password</label></div>
               </div>
               <div className="mt-6"><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-surface-submit text-white hover:bg-surface-submit-hover px-4 py-2 h-12 w-full rounded-2xl" aria-label="Continue" data-testid="login-button" type="submit">Continue</button></div>
            </form>
            <p className="my-4 text-center text-sm font-light text-gray-700 dark:text-white"> Dont have an account? <a href="/register" className="inline-flex p-1 text-sm font-medium text-green-600 transition-colors hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">Sign up</a></p>
         </div>
      </div>
   </div>
   <iframe src="/assets/silence.mp3" allow="autoplay" id="audio" title="audio-silence" style={{"display":"none"}}></iframe>
</div>


    )}