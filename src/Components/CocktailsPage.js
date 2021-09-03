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
            // for(let prop in res.data.drinks[0]) {
            //     if(prop.includes("strIngredient")) {

            //     }
            // }
            setDrink(drinkImage);
            setName(drinkName);
            // setIngredients(drinkIngredients);
        })
    }, []) 

    const testArr = ["Hello", "I", "Like", "Cheese"];

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
                <ul>
                    {
                        testArr.map(function(element, index) {
                            return <p key={index}>{element}</p>
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default CocktailsPage;
