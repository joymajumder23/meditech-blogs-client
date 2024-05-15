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
import ViewDetails from "../Components/Home/Pages/ViewDetails/ViewDetails";
import AllBlogs from "../Components/Home/Pages/AllBlogs/AllBlogs";
import Wishlists from "../Components/Home/Pages/Wishlists/Wishlists";
import PrivateRoute from "./PrivateRoute";
import Featured from "../Components/Home/Pages/Featured/Featured";

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
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: "/updateBlog/:id",
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path: "/viewDetails/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path: "/allBlogs",
          element: <AllBlogs></AllBlogs>,
          loader: () => fetch('http://localhost:5000/blogs')
        },
        {
          path: "/wishlist",
          element: <PrivateRoute><Wishlists></Wishlists></PrivateRoute>
        },
        {
          path: "/featured",
          element: <Featured></Featured>,
          loader: () => fetch('http://localhost:5000/blogs')
        }
      ]
    },
  ]);

  export default router;