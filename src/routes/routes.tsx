import { createBrowserRouter, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import { NavigatorProvider } from '@/core/navigator';
import Login from './auth/Login';
import TwoFactor from './auth/TwoFactor';
import ChatView from './chat/ChatView';


export const router = createBrowserRouter([
  {
    element: <NavigatorProvider />,
    children: [
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'login/2fa',
            element: <TwoFactor />,
          },
        ],
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/chat/0" replace={true} />,
          },
          {
            path: 'chat/:conversationId?',
            element: <ChatView />,
          },
        ],
      },
    ],
  },
]);
