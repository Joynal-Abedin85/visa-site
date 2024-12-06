import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Addvisa from './pages/Addvisa.jsx';
import Mainlayout from './pages/Mainlayout.jsx';
import Allvisa from './pages/Allvisa.jsx';
import Myvisa from './pages/Myvisa.jsx';
import Application from './pages/Application.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: '/addvisa',
        element: <Addvisa></Addvisa>
      },
      {
        path: '/allvisa',
        element: <Allvisa></Allvisa>
      },
      {
        path: '/myvisa',
        element: <Myvisa></Myvisa>
      },
      {
        path: '/application',
        element: <Application></Application>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
