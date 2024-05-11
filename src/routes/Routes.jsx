import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
  ]);

  export default router;