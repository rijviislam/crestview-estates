import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";
import Root from "./Layout/Root";
import Hoom from "./Pages/Home/Hoom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import EstateDetails from "./Pages/Shared/EstateDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hoom />,
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/estatedetails/:id",
        element: <EstateDetails />,
        loader: () => fetch("/estate.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
