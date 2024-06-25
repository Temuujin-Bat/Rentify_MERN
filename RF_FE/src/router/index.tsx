import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

import { MainLayout } from "../layouts";

const LazyHome = lazy(() => import("../pages/home"));
const LazyApartment = lazy(() => import("../pages/apartments"));
const LazySingleApartment = lazy(
  () => import("../pages/Apartments/singleApartment")
);
const LazyBlog = lazy(() => import("../pages/blog"));
const LazyAddApartment = lazy(() => import("../pages/addApartment"));
const LazyLogin = lazy(() => import("../pages/login"));
const LazyRegister = lazy(() => import("../pages/register"));
const LazyUserApartments = lazy(() => import("../pages/userApartments"));
const LazyUserEditApartment = lazy(() => import("../pages/editApartment"));
import LazyUserInfo from "../pages/userInfo";

import { AuthRedirect } from "./AuthRedirect";
import { ProtectedRoute } from "./ProtectedRoute";

const InitRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
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
          path: "/addApartment",
          element: (
            <ProtectedRoute>
              <LazyAddApartment />
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
        {
          path: "/user",
          element: (
            <ProtectedRoute>
              <Navigate to="/user/apartments" replace />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/apartments",
          element: (
            <ProtectedRoute>
              <LazyUserApartments />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/apartment/edit/:id",
          element: (
            <ProtectedRoute>
              <LazyUserEditApartment />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user/info",
          element: (
            <ProtectedRoute>
              <LazyUserInfo />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
};

export { InitRoutes };
