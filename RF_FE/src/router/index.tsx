import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

import { MainLayout } from "../layouts";

const LazyHome = lazy(() => import("../pages/home"));
const LazyApartment = lazy(() => import("../pages/apartments"));
const LazySingleApartment = lazy(
  () => import("../pages/Apartments/singleApartment")
);
const LazyBlog = lazy(() => import("../pages/blog"));
const LazyAddAds = lazy(() => import("../pages/addApartment"));
const LazyLogin = lazy(() => import("../pages/login"));
const LazyRegister = lazy(() => import("../pages/register"));
const LazyUserApartments = lazy(() => import("../pages/userApartments"));
const LazyUserSingleApartment = lazy(
  () => import("../pages/Apartments/userSingleApartment")
);
const LazyUserEditApartment = lazy(() => import("../pages/editApartment"));
import LazyUserInfo from "../pages/userInfo";
const LazyUserSavedApartments = lazy(
  () => import("../pages/userSavedApartments")
);

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
          path: "/user/apartment/:id",
          element: (
            <ProtectedRoute>
              <LazyUserSingleApartment />
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
        {
          path: "/user/savedApartments",
          element: (
            <ProtectedRoute>
              <LazyUserSavedApartments />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
};

export { InitRoutes };
