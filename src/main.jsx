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
import Authprovider from './component/Authprovider.jsx';
import Signin from './component/Signin.jsx';
import Signup from './component/Signup.jsx';
import Privateroute from './component/Privateroute.jsx';

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
        element: (
          <Privateroute>
            <Addvisa></Addvisa>

          </Privateroute>
        ) 
      },
      {
        path: '/allvisa',
        element: <Allvisa></Allvisa>,
        loader: () => fetch('http://localhost:4000/visa')
        
      },
      {
        path: '/myvisa',
        element: <Myvisa></Myvisa>,
        loader: () => fetch('http://localhost:4000/myvisa')
      },
      {
        path: '/application',
        element: <Application></Application>,
        loader: () => fetch('http://localhost:4000/myvisa')
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }

    ]
  },
  {
    path: 'visadetails/:id',
    element: <Visadetails></Visadetails>,
    loader: ({params}) => fetch(`http://localhost:4000/visa/${params.id}`)

  },
  {
    path: 'allvisa/visadetails/:id',
    element: <Visadetails></Visadetails>,
    loader: ({params}) => fetch(`http://localhost:4000/visa/${params.id}`)

  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
