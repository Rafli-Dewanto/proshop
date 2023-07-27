import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    // Routes
} from 'react-router-dom';
import App from "./App.jsx";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route index={true} path="/" element={<HomeScreen />}></Route>
            <Route path="/products/:id" element={<ProductScreen />}></Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
