import React from "react";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/homepage";
import Register from "./Components/Register";

/*
    Couple differences between React Router v5 and v6...

    - No longer need exact path.
    - Components are written as JSX.
*/

export default (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
    </Routes>
)