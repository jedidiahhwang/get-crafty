import React from "react";
import {Navigate, Routes, Route} from "react-router-dom";

import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import RegisterPage from "../pages/registerpage";
import UserPage from "../pages/userpage";
import RandomPage from "../pages/randompage";

import AuthenticatedRoutes from "./AuthenticatedRoutes";

/*
    Couple differences between React Router v5 and v6...

    - No longer need exact path.
    - Components are written as JSX.
*/

export default (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/userpage" element={<AuthenticatedRoutes component={<UserPage />} />} /> */}
        <Route path="/random" element={<RandomPage />} />
    </Routes>
)