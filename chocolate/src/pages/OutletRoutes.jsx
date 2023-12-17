import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OutletRoutes() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default OutletRoutes;
