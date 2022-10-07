import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage"
// import DetailPage from '../pages/DetailPage'
import Template from "../components/Template";
import LoginPage from "../pages/LoginPage";
import DetailPage from "../pages/DetailPage";
import CartPage from "../pages/CartPage";
import ProductListPage from "../pages/ProductListPage";
import Dashboard from "../pages/Dashboard";
import DashboardSettings from "../components/DashboardSettings";

// import Dashboard from "../pa../components/DashboardSettings

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'product',
        element: <DetailPage />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: "settings",
            element: <DashboardSettings />
          },
          {
            path: "cart",
            element: <CartPage />
          },
          {
            path: "products",
            element: <ProductListPage />
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);

export default router