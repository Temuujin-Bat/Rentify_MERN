import { useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";

import HomePage from "../pages/home";
import ApartmentsPage from "../pages/apartments";

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
      ],
    },
  ]);
};

export { InitRoutes };
