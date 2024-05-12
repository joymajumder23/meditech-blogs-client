import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/Home/Pages/Login/Login";
import Register from "../Components/Home/Pages/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;