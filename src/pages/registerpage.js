import React, {useState} from "react";

const RegisterPage = () => {

    return (
        <div id="register-page">
            <form>
                <label>
                    First Name:
                    <input type="text" placeholder="First Name" />
                </label>
                <label>
                    Last Name:
                    <input type="text" placeholder="Last Name" />
                </label>
                <label>
                    Email:
                    <input type="email" placeholder="Email" />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" placeholder="Date of Birth" />
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Password" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" placeholder="Confirm Password" />
                </label>
            </form>
        </div>
    )
}

export default RegisterPage