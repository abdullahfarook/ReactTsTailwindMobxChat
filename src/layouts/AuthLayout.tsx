import { Outlet } from 'react-router-dom';

export const AuthLayout = () =>
    <div className="flex h-full w-full flex-col">
        <h1>Auth Layout Start</h1>

        <Outlet />
        <h1>Auth Layout End</h1>
    </div>
    