import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const LazyHome = React.lazy(() => import("./pages/home/Home.jsx"));
const LazyServices = React.lazy(() => import("./pages/services/Services.jsx"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact.jsx"));
const LazyAbout = React.lazy(() => import("./pages/aboutUs/AboutUs.jsx"));
const LazyShop = React.lazy(() => import("./pages/shop/Shop.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Navbar />
        <LazyHome />
      </Suspense>
    ),
  },
  {
    path: "/servicios",
    element: (
      <Suspense>
        <Navbar />
        <LazyServices />
      </Suspense>
    ),
  },
  {
    path: "/contacto",
    element: (
      <Suspense>
        <Navbar />
        <LazyContact />
      </Suspense>
    ),
  },
  {
    path: "/nosotros",
    element: (
      <Suspense>
        <Navbar />
        <LazyAbout />
      </Suspense>
    ),
  },
  {
    path: "/tienda",
    element: (
      <Suspense>
        <Navbar />
        <LazyShop />
      </Suspense>
    ),
  },
]);

export default function NavbarOutlet() {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
