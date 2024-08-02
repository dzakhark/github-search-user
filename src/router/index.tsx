import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const UserPage = React.lazy(() => import('../pages/UserPage'));

const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'user/:login',
      element: <UserPage />,
    },
  ];
  
  export const router = createBrowserRouter(routes);