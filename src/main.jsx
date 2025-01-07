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
import Eror from './pages/Eror.jsx';
import Support from './pages/Support.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    
    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('https://visa-sites.vercel.app/visa')

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
        element:(
          <Privateroute>
            <Allvisa></Allvisa>

          </Privateroute>
        ) 
         ,
        loader: () => fetch('https://visa-sites.vercel.app/visa')
        
      },
      {
        path: '/myvisa',
        element:(
          <Privateroute>
            <Myvisa></Myvisa>

          </Privateroute>
        )  ,
        loader: () => fetch('https://visa-sites.vercel.app/myvisa')
      },
      {
        path: '/application',
        element:(
          <Privateroute>
            <Application></Application>

          </Privateroute>
        )  ,
        loader: () => fetch('https://visa-sites.vercel.app/myvisa')
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/support',
        element: <Support></Support>
      }

    ]
  },
  {
    path: 'visadetails/:id',
    element: <Visadetails></Visadetails>,
    loader: ({params}) => fetch(`https://visa-sites.vercel.app/visa/${params.id}`)

  },
  {
    path: 'allvisa/visadetails/:id',
    element: <Visadetails></Visadetails>,
    loader: ({params}) => fetch(`https://visa-sites.vercel.app/visa/${params.id}`)

  },
  {
    path:'*',
    element: <Eror></Eror>
  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
