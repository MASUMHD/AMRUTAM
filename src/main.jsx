import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Pages/MainLayout'
import Home from './Pages/Home';
import FindDoctors from './Pages/FindDoctors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:  <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/find-doctors",
        element: <FindDoctors/>,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
