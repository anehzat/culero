import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/index.tsx'
import './index.css'
import { ContentsProvider } from './providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContentsProvider>
      <RouterProvider router={router} />
      <ToastContainer theme="colored" />
    </ContentsProvider>
  </React.StrictMode>,
)
