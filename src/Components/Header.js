import React from "react";
import Headroom from "react-headroom";
import {Link, animateScroll as scroll} from "react-scroll";

import "../SASS/_header.scss";

const Header = () => {

    return (
        <Headroom id="headroom">
            <h3>Login</h3>
            <h3>Register</h3>
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