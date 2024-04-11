import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";
import Root from "./Layout/Root";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Hoom from "./Pages/Home/Hoom";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Projects from "./Pages/Projects/Projects";
import Register from "./Pages/Register/Register";
import EstateDetails from "./Pages/Shared/EstateDetails";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: "/projects",
        element: <Projects />,
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
