
import App from './Routes/App.tsx'
import ReactDOM from 'react-dom/client'
import ErrorPage from './Routes/ErrorPage.tsx'
import './input.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>
)
