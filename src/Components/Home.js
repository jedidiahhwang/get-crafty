import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_home.scss";

const Home = (props) => {

    return ( 
        <div id="home">
                <div id="welcome-box">
                    <h3>bartending, simplified</h3>
                    <p>generate hundreds of cocktail recipes instantly</p>
                    <button class="account-buttons">LEARN MORE</button>
                </div>
        </div>
    )
}

export default Home;