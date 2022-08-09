import React from "react";
import IngredientsList from "./IngredientsList";

// get cocktail card, pass ingredient and measure values to IngredientsList component
const CocktailCard = ({ drink }) => {
    return (
      <div className="card">
        <img src={drink.strDrinkThumb} alt="" />
        <h1>{drink.strDrink}</h1>
        <IngredientsList measures={Object.values(drink).slice(33,48)} ingredients={Object.values(drink).slice(18,33)} />
        <p>{drink.strInstructions}</p>
      </div>
    );
}

export default CocktailCard;