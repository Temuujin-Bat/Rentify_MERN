import { useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";

import HomePage from "../pages/home";
import ApartmentsPage from "../pages/apartments";
import AddAdsPage from "../pages/addAds";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";

const InitRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/apartments",
          element: <ApartmentsPage />,
        },
        {
          path: "/addAds",
          element: <AddAdsPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
};

export { InitRoutes };
