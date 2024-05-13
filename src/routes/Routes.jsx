import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/Home/Pages/Login/Login";
import Register from "../Components/Home/Pages/Register/Register";
import Error from "../Components/Shared/Error/Error";
import AddBlog from "../Components/Home/Pages/AddBlog/AddBlog";
import UpdateBlog from "../Components/Home/Pages/UpdateBlog/UpdateBlog";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
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
        },
        {
          path: "/addBlog",
          element: <AddBlog></AddBlog>
        },
        {
          path: "/updateBlog",
          element: <UpdateBlog></UpdateBlog>
        }
      ]
    },
  ]);

  export default router;