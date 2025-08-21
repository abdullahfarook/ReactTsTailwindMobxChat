import { createBrowserRouter, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ChatRoute from './ChatRoute';
import { AuthLayout } from '@/layouts/AuthLayout';
import LoginRoute from './AuthRoute'; 
import MainLayout from '@/layouts/MainLayout';


export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginRoute />,
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
            element: <ChatRoute />,
          },
        ],
      },
    ],
  },
]);
