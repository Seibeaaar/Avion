import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import ErrorPage from "src/pages/ErrorPage";
import HomePage from "src/pages/Home";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
    ],
  },
]);

export default router;
