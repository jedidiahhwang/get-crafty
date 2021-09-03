import React, {useEffect, useState} from "react";
import axios from "axios";


const CocktailsPage = () => {

    const [drink, setDrink] = useState("");
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(res => {
            const drinkImage = `${res.data.drinks[0].strDrinkThumb}/preview`;
            const drinkName = `${res.data.drinks[0].strDrink}`;
            const drinkIngredients = `${res.data.drinks[0].strIngredient1}`;
            // for(let prop in res.data.drinks[0]) {
            //     if(prop.includes("strIngredient")) {
            //         console.log(res.data.drinks[0].prop)
            //         drinkIngredients.push(res.data.drinks[0].prop);
            //     }
            // }
            setDrink(drinkImage);
            setName(drinkName);
            setIngredients(drinkIngredients);
            console.log(drinkIngredients)
        })
    }, []) 

    return (
        <div id="cocktails-page">
            <h2>Feeling lucky? Here's a random cocktail.</h2>
            <div id="random-box">
                <h4>{name}</h4>
                <img
                    id="cocktail-image"
                    src={drink}
                    alt="Random photo from CocktailDB"
                />
                {ingredients.length > 0 ? 
                    <h5>{ingredients}</h5>
                : null}
            </div>
        </div>
    )
}

export default CocktailsPage;
