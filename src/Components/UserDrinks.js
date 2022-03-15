import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import AddDrinkModal from "./SubComponents/AddDrinkModal.js";
import UseDrinkModal from "./SubComponents/UseDrinkModal.js";

import "../SASS/components/_userdrinks.scss";

const UserDrinks = () => {
    const {isShowing, toggle} = UseDrinkModal();

    const user = useSelector((state) => state.user);

    return (
        <div id="user-drinks-container">
            <section id="user-drinks">
                <button class="add-button" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <AddDrinkModal isShowing={isShowing} toggle={toggle} />
            </section>
        </div>
    )
}

export default UserDrinks