import React, {useState} from "react";
import {useSelector} from "react-redux";

import UseDrinkModal from "./UseDrinkModal.js";
import AddDrinkModal from "./AddDrinkModal.js";

import "../../SASS/components/_drinkCardModal.scss";

const DrinkCardButton = (props) => {
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
        
            <button class="drink-card" onMouseEnter={displayOverlay} onMouseLeave={removeOverlay} onClick={toggle}>
                {
                    displayState === "hidden" ?
                        <div className="drink-card-overlay">
                            <img 
                                id="card-image"
                                src={props.image}
                            />
                        </div>
                    :
                        <div id="filter" className="drink-card-overlay">
                            <h3>{props.name}</h3>
                        </div>
                }
                <AddDrinkModal isShowing={isShowing} toggle={toggle} />
            </button>
        
    )
}

export default DrinkCardButton