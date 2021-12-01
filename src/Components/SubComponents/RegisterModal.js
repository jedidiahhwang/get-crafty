import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./RegisterForm";

const RegisterModal = ({open, handleClose}) => {


    return (
        <div className="modal">
            <Dialog open={open} onClose={handleClose}>
                <Form handleClose={handleClose} />
            </Dialog>
        </div>
    )
}

export default RegisterModal