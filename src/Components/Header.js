import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {Link, Button, animateScroll as scroll} from "react-scroll";
import RegisterModal from "./SubComponents/RegisterModal";

import "../SASS/_header.scss";

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Headroom id="headroom">
            <button>Login</button>
            <a>Register</a>
            <button variant="contained" color="primary" onClick={handleOpen}>Register</button>
            <RegisterModal open={open} handleClose={handleClose} />
        </Headroom>
    )
}

export default Header;