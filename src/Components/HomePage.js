import React, {useState} from "react";
import RegisterModal from "./SubComponents/RegisterModal";

import "../SASS/_homepage.scss";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <div id="home-page">
                <div id="welcome-box">
                    <h2>Get Crafty</h2>
                    <h4>Let's try something new</h4>
                </div>
        </div>
    )
}

export default HomePage;