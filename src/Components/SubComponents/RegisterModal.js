import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form";

const RegisterModal = ({open, handleClose}) => {


    return (
        <div className="modal">
            <Dialog open={open} onClose={handleClose}>
                <Form handleClose={handleClose} />
            </Dialog>
            {/* <h2 className="modal-header">
                Register
            </h2>
            <form className="modal-form">
                <h4 className="modal-subheader">
                    Email Address
                </h4>
                <input
                    className="input email"
                    placeholder="someone@example.com"
                />
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
                <h4 className="modal-subheader">
                    Verify Password
                </h4>
                <input
                    className="input password"
                    placeholder="Verify Password"
                />
            </form>
            <section className="modal-button-holder">
                <button className="modal-button">
                    Login
                </button>
            </section> */}
        </div>
    )
}

export default RegisterModal