import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

//Lazy load
const Error = lazy(() => import("./components/ErrorCard"))
const Home = lazy(() => import('./pages/Home'))
const Characters = lazy(() => import('./pages/Characters'))
const AboutCharacter = lazy(() => import('./pages/About-character'))
const Loader = lazy(() => import('./components/loader'))


//TODO: Colocar la etiqueta para colocar el componente mientras se pasa de pagina
// Routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error desc='We could not find the page that you wanted.' color='black'/>
  },
  {
    path: 'characters',
    element: <Characters/>
  },
  {
    path: 'characters/:id',
    element: <AboutCharacter/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main>
      <Suspense fallback={ <Loader/> }>
        <RouterProvider router={routes}></RouterProvider>
      </Suspense>
    </main>
  </React.StrictMode>,
)
