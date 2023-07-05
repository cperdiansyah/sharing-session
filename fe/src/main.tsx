import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Custom hooks */
import CustomHooks from './pages/CustomHooks'

/* Component */
import App from './pages/Home/App'
import Layout from './pages/components/Layout'
import CleanupuseEffect from './pages/CleanupuseEffect'
import HooksAlternative from './pages/ReactHooksHell'

/*  style */
import './assets/tailwind.css'

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
      {
        path: '/hooks-hell',
        element: <HooksAlternative />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
