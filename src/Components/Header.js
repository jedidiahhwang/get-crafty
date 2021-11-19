import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import Button from "@material-ui/core/Button";
import {Link, animateScroll as scroll} from "react-scroll";
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
            <Link
                className="header-links"
                activeClass="active"
                to="login-page"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
            >
                Login
            </Link>
            <a>Register</a>
            <Button variant="contained" color="primary" onClick={handleOpen}>Register</Button>
            <RegisterModal open={open} handleClose={handleClose} />
            <Link
                className="header-links"
                activeClass="active"
                to="about-page"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
            >
                About
            </Link>
        </Headroom>
    )
}

export default Header;