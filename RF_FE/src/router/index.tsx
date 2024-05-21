import { useRoutes } from "react-router-dom";
import { lazy } from "react";

import { MainLayout } from "../layouts";

import HomePage from "../pages/home";
import ApartmentsPage from "../pages/apartments";

import SingleApartment from "../pages/Apartments/singleApartment";
import BlogPage from "../pages/blog";
import AddAdsPage from "../pages/addAds";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";

import { AuthRedirect } from "./AuthRedirect";
import { ProtectedRoute } from "./ProtectedRoute";

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
          path: "/apartments/:id",
          element: <SingleApartment />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/addAds",
          element: (
            <ProtectedRoute>
              <AddAdsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: (
            <AuthRedirect>
              <LoginPage />
            </AuthRedirect>
          ),
        },
      ],
    },
  ]);
};

export { InitRoutes };
