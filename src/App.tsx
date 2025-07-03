import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './global.css'
import { Home } from './pages/Home'

export default function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <Navigate to="/class_swift" replace /> },
        { path: '/class_swift', element: <Home /> },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}
