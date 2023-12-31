import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import OutletRoutes from "./pages/OutletRoutes.jsx";
import Footer from "./components/Footer.jsx";
const LazyHome = React.lazy(() => import("./pages/home/Home.jsx"));
const LazyServices = React.lazy(() => import("./pages/services/Services.jsx"));
const LazyContact = React.lazy(() => import("./pages/contact/Contact.jsx"));
const LazyAbout = React.lazy(() => import("./pages/aboutUs/AboutUs.jsx"));
const LazyShop = React.lazy(() => import("./pages/shop/Shop.jsx"));
const LazyProduct = React.lazy(() => import("./pages/shop/Product.jsx"));
const LazyCart = React.lazy(() => import("./pages/shop/Cart.jsx"));
const LazyCheckOut = React.lazy(() => import("./pages/shop/CheckOut.jsx"));
import { ProductProvider } from "./context/ProductProvider.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletRoutes />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "/servicios",
        element: (
          <Suspense>
            <LazyServices />
          </Suspense>
        ),
      },
      {
        path: "/contacto",
        element: (
          <Suspense>
            <LazyContact />
          </Suspense>
        ),
      },
      {
        path: "/nosotros",
        element: (
          <Suspense>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/tienda",
        element: (
          <Suspense>
            <LazyShop />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <LazyCart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense>
            <LazyCheckOut />
          </Suspense>
        ),
      },
      {
        path: "/tienda/producto/:id",
        element: (
          <Suspense>
            <LazyProduct />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function NavbarOutlet() {}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <ShoppingCartProvider>
        <div className=" font-serif">
          <RouterProvider router={router} />
        </div>
      </ShoppingCartProvider>
    </ProductProvider>
  </React.StrictMode>
);
