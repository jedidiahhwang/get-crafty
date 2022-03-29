import React, {useState} from "react";
import {useSelector} from "react-redux";

import UseDrinkModal from "./UseDrinkModal.js";
import AddDrinkModal from "./AddDrinkModal.js";

import "../../SASS/components/_drinkCardModal.scss";

const AddCardButton = (props) => {
    const [displayState, setDisplayState] = useState("hidden");

    const {isShowing, toggle} = UseDrinkModal();

    const user = useSelector((state) => state.user);
    
    const displayOverlay = (event) => {
        event.stopPropagation();
        setDisplayState("inline");
        console.log("Currently hovered");
    };

    const removeOverlay = (event) => {
        event.stopPropagation();
        setDisplayState("hidden");
        console.log("Removed hover");
    };
    
    return (
        <>
            <button class="drink-card" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
            <AddDrinkModal isShowing={isShowing} toggle={toggle} />
        </>
        
    )
}

export default AddCardButton