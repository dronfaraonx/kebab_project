import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import NavigationBar from "./components/ui/NavigationBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Layout from "./components/Layout";
import RegistrationPage from "./components/pages/RegistrationPage";
import MainPage from "./components/pages/MainPage";
import  Profile from "./components/pages/Profile";
import { UserProvider } from "./components/Context/auth";
import OrderButton from "./components/ui/btns/OrderBtn";
import AddOrderPage from "./components/pages/AddOrderPage";

function App() {
    // const [user, setUser] = useState()
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
          {
            path: "/login",
            element: <LoginPage />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/items/order/:id",
            element: <OrderButton />
          },
                    {
            path: "/items/newOrder",
            element: <AddOrderPage />
          },
        ]
      }
    ]);

  return (
    <UserProvider>
      <RouterProvider router={router} /> 
    </UserProvider>
  );


}

export default App
