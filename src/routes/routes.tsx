import { createBrowserRouter, Navigate} from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import LoginView from './auth/LoginView';
import TwoFactorView from './auth/TwoFactorView';
import AppLayout from '@/layouts/AppLayout';
import ChatLayout from '@/layouts/ChatLayout';
import MainLayout from '@/layouts/MainLayout';
import { Detail } from './chat/Detail';


export const router = createBrowserRouter([
  {
    element: <AppLayout />,
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
            element: <Navigate to="/chat/new" replace={true} />,
          },
          {
            path: 'chat',
            element: <ChatLayout />,
            children: [
              {
                path: ':conversationId',
                element: <Detail />,
              },
            ],
          },
          
        ],
      },
    ],
  },
]);
