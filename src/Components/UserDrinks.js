import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import AddDrinkModal from "./SubComponents/AddDrinkModal.js";
import UseDrinkModal from "./SubComponents/UseDrinkModal.js";
import DrinkCardModal from "./SubComponents/DrinkCardModal.js";

import "../SASS/components/_userdrinks.scss";

const UserDrinks = () => {
    const [userDrinks, setUserDrinks] = useState([]);
    const [user, setUser] = useState();

    const {isShowing, toggle} = UseDrinkModal();

    useEffect(() => {
        axios.get("/drinks/recipe")
            .then((res) => {
                console.log(res.data);
                setUserDrinks(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleUserChange = (incomingUser) => {
        let updatedUser = {...incomingUser};
        setUser(updatedUser);
        setUserDrinks(updatedUser.recipes)
        console.log(incomingUser);
    }

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
                <AddDrinkModal handleUserChange={handleUserChange} isShowing={isShowing} toggle={toggle} />
                <>
                {userDrinks.length > 0 ? 
                        userDrinks.map(function(element, index) {
                            return <DrinkCardModal image={element.image} key={index} />
                        })
                    : null}
                </>
            </section>
        </div>
    )
}

export default UserDrinks