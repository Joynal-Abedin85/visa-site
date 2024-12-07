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
import Visadetails from './pages/Visadetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    
    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/visa')

      },
      {
        path: '/addvisa',
        element: <Addvisa></Addvisa>
      },
      {
        path: '/allvisa',
        element: <Allvisa></Allvisa>,
        loader: () => fetch('http://localhost:4000/visa')
        
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
  {
    path: 'visadetails/:id',
    element: <Visadetails></Visadetails>,
    loader: ({params}) => fetch(`http://localhost:4000/visa/${params.id}`)

  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
