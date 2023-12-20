import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
import Nav from "./Nav";
import ProtectorRouter from "./ProtectorRouter";

const Layout = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectorRouter>
              <Home />
            </ProtectorRouter>
          }
        />
        <Route
          path="/DashBoard"
          element={
            <ProtectorRouter>
              <DashBoard />
            </ProtectorRouter>
          }
        />
        <Route path="*" element={<h1>No pages</h1>} />
      </Routes>
    </>
  );
};

export default Layout;
