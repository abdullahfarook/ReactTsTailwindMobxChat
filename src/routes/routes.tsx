import { createBrowserRouter, Navigate} from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import NavigatorProvider from '@/components/NavigationService';
import LoginView from './auth/LoginView';
import TwoFactorView from './auth/TwoFactorView';
import NewChat from './chat/NewChat';
import ChatLayout from '@/layouts/ChatLayout';
import Detail from './chat/Detail';


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
            element: <Navigate to="/chat/new" replace={true} />,
          },
          {
            path: 'chat',
            element: <ChatLayout />,
            children: [
              {
                path: 'new',
                element: <NewChat />,
              },
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
