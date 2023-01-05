import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import Posts from "../components/Posts";
import Profile from "../components/Profile";
import Todo from "../components/Todo";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "home",
    element: <Home/>,
    errorElement: <PrivateRoute><ErrorPage/></PrivateRoute>,
    children: [
      {
        path: "profile/:profileid",
        element: <PrivateRoute><Profile /></PrivateRoute>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "posts",
        element: <PrivateRoute><Posts /></PrivateRoute>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "gallery",
        element: <PrivateRoute><Gallery /></PrivateRoute>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "todo",
        element: <PrivateRoute><Todo /></PrivateRoute>,
        errorElement: <ErrorPage/>,
      },
    ],
  }    
]);

export default router;
