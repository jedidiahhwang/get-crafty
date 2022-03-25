import React, {useState} from "react";
import {useSelector} from "react-redux";

import "../../SASS/components/_drinkCardModal.scss";

const DrinkCardModal = (props, {isShowing, toggle}) => {
    const [displayState, setDisplayState] = useState("hidden");

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
            <button class="drink-card" onMouseEnter={displayOverlay} onMouseLeave={removeOverlay}>
                {
                    displayState === "hidden" ?
                        <div className="drink-card-overlay">
                            <img 
                                id="card-image"
                                src={props.image}
                            />
                        </div>
                    :
                        <div className="drink-card-overlay">
                            <h3>{props.name}</h3>
                        </div>
                }
            </button>
        </>
    )
}

export default DrinkCardModal