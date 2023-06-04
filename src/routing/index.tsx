import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import ErrorPage from "src/pages/ErrorPage";
import HomePage from "src/pages/Home";
import CartPage from "src/pages/Cart";
import ProductPage from "src/pages/Product";

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
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <ProductPage />,
        path: "/product/:name/:id",
      },
      {
        element: <CartPage />,
        path: "/cart",
      },
      {
        element: <ErrorPage />,
        path: "*",
      },
    ],
  },
]);

export default router;
