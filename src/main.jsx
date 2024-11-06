import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import ViewDetails from './components/ViewDetails';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Feck from './components/Feck';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: () => fetch('Category.json')
      },
      {
        path: '/feck',
        element: <Feck></Feck>
      },
      {
        path: 'product/:productId',
        element: <ViewDetails />,
        loader: () => fetch('Category.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);

