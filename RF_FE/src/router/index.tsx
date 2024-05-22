import { useRoutes } from "react-router-dom";
import { lazy } from "react";

import { MainLayout } from "../layouts";

const LazyHome = lazy(() => import("../pages/home"));
const LazyApartment = lazy(() => import("../pages/apartments"));
const LazySingleApartment = lazy(
  () => import("../pages/Apartments/singleApartment")
);
const LazyBlog = lazy(() => import("../pages/blog"));
const LazyAddAds = lazy(() => import("../pages/addAds"));
const LazyLogin = lazy(() => import("../pages/login"));
const LazyRegister = lazy(() => import("../pages/register"));

import { AuthRedirect } from "./AuthRedirect";
import { ProtectedRoute } from "./ProtectedRoute";

const InitRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "*",
          element: <LazyHome />,
        },
        {
          path: "/",
          element: <LazyHome />,
        },
        {
          path: "/apartments",
          element: <LazyApartment />,
        },
        {
          path: "/apartments/:id",
          element: <LazySingleApartment />,
        },
        {
          path: "/blog",
          element: <LazyBlog />,
        },
        {
          path: "/addAds",
          element: (
            <ProtectedRoute>
              <LazyAddAds />
            </ProtectedRoute>
          ),
        },
        {
          path: "/register",
          element: <LazyRegister />,
        },
        {
          path: "/login",
          element: (
            <AuthRedirect>
              <LazyLogin />
            </AuthRedirect>
          ),
        },
      ],
    },
  ]);
};

export { InitRoutes };
