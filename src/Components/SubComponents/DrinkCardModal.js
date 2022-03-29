import React, {useState} from "react";
import ReactDOM from "react-dom";

const DrinkCardModal = ({isShowing, toggle}) => {

    const handleExit = (event) => {
        event.preventDefault();
        toggle();
    }
    
    if(isShowing) {
        return (
            ReactDOM.createPortal(
                <>
                    <div className="modal">
                        <h1>Hello There</h1>
                    </div>
                </>, document.body
            )
        )
    } else {
        return (
            null
        );
    }
}

export default DrinkCardModal
