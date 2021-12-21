import React, {useState} from "react";

const LoginPage = () => {
    
    return (
        <div id="login-page">
            <form>
                <label>
                    Email:
                    <input type="email" placeholder="Email" />
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Password" />
                </label>
            </form>
        </div>
    )
}

export default LoginPage