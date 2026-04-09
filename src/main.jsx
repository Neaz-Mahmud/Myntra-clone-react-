import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../route/App.jsx'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from '../route/bag.jsx'
import Homeitem from '../component/Homeitem.jsx'
import Home, { loadallpost } from '../route/home.jsx'
import { Provider } from 'react-redux'
import myntrastore from '../store/index.js'

const route = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: loadallpost
      },
      {
        path: 'home',
        element: <Home />,
        loader: loadallpost
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
  <Provider store={myntrastore}>
    <RouterProvider router={route} />
  </Provider>
)
