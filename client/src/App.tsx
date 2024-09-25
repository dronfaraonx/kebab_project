import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import NavigationBar from "./components/ui/NavigationBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import LoginPage from "./components/pages/LoginPage";
import Layout from "./components/Layout";
import RegistrationPage from "./components/pages/RegistrationPage";
import MainPage from "./components/pages/MainPage";

//react component
function App() {
  
    const router = createBrowserRouter([
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <MainPage />
          },
          {
            path: "/registration",
            element: <RegistrationPage />
          },
          // {
          //   path: "/login",
          //   element: <LoginPage />
          // },
        ]
      }
    ]);

    return <RouterProvider router = {router} />;


}

export default App
