import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/Home/App'
import CustomHooks from './pages/CustomHooks'
import Layout from './pages/components/Layout'
import './assets/tailwind.css'
import CleanupuseEffect from './pages/CleanupuseEffect'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/custom-hooks',
        element: <CustomHooks />,
      },
      {
        path: '/cleanup-useEffect',
        element: <CleanupuseEffect />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
