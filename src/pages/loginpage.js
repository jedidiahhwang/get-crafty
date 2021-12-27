import React, {useState} from "react";

import LoginForm from "../Components/LoginForm.js";
import "../SASS/pages/_loginpage.scss";

const LoginPage = () => {
    
    return (
        <div id="login-page">
            <LoginForm />
        </div>
    )
}

export default LoginPage