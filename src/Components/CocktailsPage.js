import React, {useEffect, useState} from "react";
import axios from "axios";


const CocktailsPage = () => {

    const [drink, setDrink] = useState("");

    useEffect(() => {
        axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(res => {
            const drinkImage = `${res.data.drinks[0].strDrinkThumb}/preview`;
            setDrink(drinkImage);
        })
    }, []) 

    return (
        <div id="cocktails-page">
            <img
                id="cocktail-image"
                src={drink}
                alt="Random photo from CocktailDB"
            />
            
        </div>
    )
}

export default CocktailsPage;