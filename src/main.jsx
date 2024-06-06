import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AddProducts from "./components/AddProducts/AddProducts";
import BrandDetails from "./components/Home/Brands/BrandDetails/BrandDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProductDetails from "./components/Home/Brands/BrandDetails/Products/ProductDetails";
import Cart from "./components/Cart/Cart";
import UpdateProduct from "./components/AddProducts/UpdateProduct";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/brands.json"),
            },
            {
                path: "/add-products",
                element: (
                    <PrivateRoute>
                        <AddProducts />
                    </PrivateRoute>
                ),
            },
            {
                path: "/brand/:brandName",
                element: <BrandDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://haven-wheels-server.vercel.app/cars/${params.brandName}`
                    ),
            },
            {
                path: "/brand/:brand/product-details/:id",
                element: (
                    <PrivateRoute>
                        <ProductDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://haven-wheels-server.vercel.app/car/${params.id}`
                    ),
            },
            {
                path: "/cart",
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
                loader: () =>
                    fetch("https://haven-wheels-server.vercel.app/cart"),
            },
            {
                path: "/update-product/:id",
                element: (
                    <PrivateRoute>
                        <UpdateProduct />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://haven-wheels-server.vercel.app/car/${params.id}`
                    ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
        </AuthProvider>
    </React.StrictMode>
);
