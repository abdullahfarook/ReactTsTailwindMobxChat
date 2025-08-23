import { createBrowserRouter, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import { NavigatorProvider } from '@/components/NavigationService';
import LoginView from './auth/LoginView';
import TwoFactorView from './auth/TwoFactorView';
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
            element: <LoginView />,
          },
          {
            path: 'login/2fa',
            element: <TwoFactorView />,
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
