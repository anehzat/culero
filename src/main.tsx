import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/index.tsx'
import './index.css'
import { ContentsProvider } from './providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { Provider } from "react-redux";
// import { store, persistor } from '@/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}> */}
            <ContentsProvider>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </ContentsProvider>
          {/* </PersistGate>
        </Provider>
      </Hydrate>
    </QueryClientProvider> */}
  </React.StrictMode>,
)
