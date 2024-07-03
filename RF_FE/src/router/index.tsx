import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

import { MainLayout } from "../layouts";

const LazyHome = lazy(() => import("../pages/home"));
const LazyApartment = lazy(() => import("../pages/apartments"));
const LazySingleApartment = lazy(
  () => import("../pages/Apartments/singleApartment")
);
const LazyBlog = lazy(() => import("../pages/blog"));
const LazyAddApartment = lazy(
  () => import("../features/apartments/components/AddApartment")
);
const LazyLogin = lazy(() => import("../pages/login"));
const LazyRegister = lazy(() => import("../pages/register"));
const LazyUserApartments = lazy(
  () => import("../pages/Apartments/userApartments")
);
const LazyUserEditApartment = lazy(
  () => import("../features/apartments/components/EditApartment")
);
const LazyProfile = lazy(() => import("../pages/profile"));
const LazyPasswordChange = lazy(
  () => import("../features/profile/components/PasswordChange")
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
          path: "/profile",
          element: (
            <ProtectedRoute>
              <LazyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/edit-photo",
          element: (
            <ProtectedRoute>
              <LazyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/edit-name",
          element: (
            <ProtectedRoute>
              <LazyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/edit-account",
          element: (
            <ProtectedRoute>
              <LazyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/edit-profile",
          element: (
            <ProtectedRoute>
              <LazyProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/password-change",
          element: (
            <ProtectedRoute>
              <LazyPasswordChange />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
};

export { InitRoutes };
