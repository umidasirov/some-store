import { createBrowserRouter } from 'react-router'
import * as Pages from '../pages'
import Layout from '../layout/layout'
import ProductDetails from '../components/productDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Pages.Home />,
      },
      {
        path: 'details',
        element: <Pages.Details />,
      },
      {
        path: 'contact',
        element: <Pages.Contact />,
      },
      {
        path: 'products',
        element: <Pages.Products />,
      },
      {
        path: 'about',
        element: <Pages.Aboutus />,
      },
      {
        path: 'products/:slug',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Pages.NotFoundPage />,
  },
])

export default router
