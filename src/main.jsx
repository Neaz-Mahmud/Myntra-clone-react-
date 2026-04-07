import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../route/App.jsx'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from '../route/bag.jsx'
import Homeitem from '../component/Homeitem.jsx'
import Home from '../route/home.jsx'

const route = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'bag',
        element: <Bag />
      }
    ]
  }


  ]

)


createRoot(document.getElementById('root')).render(

  <RouterProvider router={route} />
)
