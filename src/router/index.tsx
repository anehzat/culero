import { Dashboard } from '@/pages/Dashboard'
import { About } from '@/pages/About'
import { How } from '@/pages/How'
import { FAQ } from '@/pages/FAQ'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/how',
        element: <How />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/*',
        element: <Navigate replace to="/" />,
      },
    ],
  },
])
