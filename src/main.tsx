import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/Home/App'
import './assets/index.css'
import CustomHooks from './pages/CustomHooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/custom-hooks',
    element: <CustomHooks />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
