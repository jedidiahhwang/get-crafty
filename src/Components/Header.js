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
            <section id="logo-section">
                <Link className="logo-links">get crafty</Link>
            </section>
            <section id="link-section">
                <Link className="header-links">About</Link>
                <Link className="header-links">Login</Link>
                <Link className="header-links">Register</Link>
            </section>
        </Headroom>
    )
}

export default Header;