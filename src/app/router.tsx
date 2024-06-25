import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import {Team} from '@/components/team'
import {LoginPage} from '../pages/login/login-page'
import {Layout} from '../components/layout'
import {NotFount} from '../pages/not-found/not-found-page'
import {PartnerPage} from '../pages/partner/partner-page'

const privateRoutes = [
  {
    path: 'team',
    element: <Team/>,
  },
  {
    path: 'team/:id',
    element: <PartnerPage/>,
  }
]

const publicRoutes = [
  {
    path: 'login',
    element: <LoginPage/>
  }
]

const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <Navigate replace to={'/team'}/>,
        path: '/',
      },
      {
        element: <Layout/>,
        children: [{
          element: <PrivateRoutes/>,
          children: privateRoutes
        }]
      },
      ...publicRoutes,
      {
        element: <NotFount/>,
        path: '*'
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router}/>
}