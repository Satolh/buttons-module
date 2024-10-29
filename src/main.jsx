import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './StyleCss/index.css'
import './StyleCss/colorPaletteStyle.css'
import './StyleCss/input.css'
import InputsPage from './routes/InputsPage.jsx'
import NotFoundPage from './routes/NotFoundPage.jsx'
import ColorPalletePage from './routes/ColorPalettesPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/routes/ColorPalettesPage.jsx",
    element: <ColorPalletePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/routes/InputsPage.jsx",
    element: <InputsPage/>,
    errorElement: <NotFoundPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
