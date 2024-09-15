import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Signin />
  //       </>
  //     ),
  //   },

  //   {
  //     path: "/Login",
  //     element: (
  //       <>
  //         <Login />
  //       </>
  //     ),
  //   },
  // ]);
  return (
    // <>
    //   <RouterProvider router={router} />
    // </>
    <Home/>
  
  );
};

export default App;
