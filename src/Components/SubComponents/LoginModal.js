import React from "react";

const LoginModal = (props) => {


    return (
        <div className="modal">
            <h2 className="modal-header">
                Login
            </h2>
            <form className="modal-form">
                <h4 className="modal-subheader">
                    Username
                </h4>
                <input
                    className="input username"
                    placeholder="Username"
                />
                <h4 className="modal-subheader">
                    Password
                </h4>
                <input
                    className="input password"
                    placeholder="Password"
                />
            </form>
            <section className="modal-button-holder">
                <button className="modal-button">
                    Login
                </button>
            </section>
        </div>
    )
}

export default LoginModal