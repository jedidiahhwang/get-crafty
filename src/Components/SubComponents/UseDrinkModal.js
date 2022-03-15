/*
    Refer to the following link for guide: https://upmostly.com/tutorials/modal-components-react-custom-hooks

    This component is a custom hook to handle when the modal will appear. The following hook will
    handle the state of whether the modal is to be rendered using useState, while using a custmo
    function to change the state accordingly.
*/

import {useState} from "react";

const UseDrinkmodal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    }

    // Returning the following will let the component access those values/functions.
    return {
        isShowing,
        toggle
    }
}

export default UseDrinkmodal