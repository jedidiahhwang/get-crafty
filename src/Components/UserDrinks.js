import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

import AddDrinkModal from "./SubComponents/AddDrinkModal.js";
import UseDrinkModal from "./SubComponents/UseDrinkModal.js";
import AddCardButton from "./SubComponents/AddCardButton.js";
import DrinkCardButton from "./SubComponents/DrinkCardButton.js";
import DrinkCardModal from "./SubComponents/DrinkCardModal.js";

import "../SASS/components/_userdrinks.scss";

const UserDrinks = () => {
    const [userDrinks, setUserDrinks] = useState([]);
    const [user, setUser] = useState();
    const [hover, setHover] = useState(false);

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

    const handleMouseEnter = () => {
        setHover(true);
        console.log("UserDrinks got state");
    };

    return (
        <div id="user-drinks-container">
            <section id="user-drinks">
                <AddCardButton />
                <>
                {userDrinks.length > 0 ? 
                        userDrinks.map(function(element, index) {
                            return <DrinkCardButton image={element.image} name={element.name} key={index}/>
                        })
                        : null}
                </>
                <AddDrinkModal handleUserChange={handleUserChange} isShowing={isShowing} toggle={toggle} />
            </section>
        </div>
    )
}

export default UserDrinks