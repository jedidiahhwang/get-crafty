import React from "react";
import {useSelector} from "react-redux";

const DrinkCardModal = (props, {isShowing, toggle}) => {
    const user = useSelector((state) => state.user);
    
    
    return (
        <button class="drink-card">
            <img 
                src={props.image}
            />
        </button>
    )
}

export default DrinkCardModal