import { Outlet } from 'react-router-dom';

export const AuthLayout = () =>
    <div id="root" style={{ "padding": "25px" }} className="component-inspector-selected">
        <div className="relative flex min-h-screen flex-col bg-white dark:bg-gray-900" style={{}}>
            <div className="mt-6 h-10 w-full bg-cover">
                {/* <img src="/assets/logo.svg" className="h-full w-full object-contain" alt="LibreChat Logo" /> */}
            </div>
            {/* <div className="absolute bottom-0 left-0 md:m-4">
                <div className="flex flex-col items-center justify-center bg-white pt-6 dark:bg-gray-900 sm:pt-0">
                    <div className="absolute bottom-0 left-0 m-4">
                        <button className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" aria-label="Switch to light theme" aria-keyshortcuts="Ctrl+Shift+T">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon" aria-hidden="true">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div> */}
            <Outlet />
        </div>
    </div>
