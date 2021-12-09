import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {Link as scrollLink, Button, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_header.scss";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    // console.log(login, logout);
    console.log(user);

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Headroom id="headroom">
            <section id="logo-section">
                <Link to="/" className="logo-links">get crafty</Link>
            </section>
            <section id="link-section">
                {/* <Link to="/about" className="header-links">about</Link> */}
                <button onClick={() => login("Jeddy")}>login</button>
                <Link to="/login" className="header-links">login</Link>
                <Link to="/" className="header-links">logout</Link>
                <Link to="/register" className="header-links">register</Link>
            </section>
            <>
                {user.isLoggedIn && user.email ? 
                    <h1>IT WORKED</h1>
                    : null}
            </>
        </Headroom>
    )
}

export default Header;