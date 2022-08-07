import React from "react";
import IngredientsList from "./IngredientsList";

const CocktailCard = ({ drink }) => {
    return (
      <div className="card">
        <img src={drink.strDrinkThumb} alt="" />
        <h1>{drink.strDrink}</h1>
        <IngredientsList ingredients={Object.values(drink).slice(17,32)} />
        <p>{drink.strInstructions}</p>
      </div>
    );
}

export default CocktailCard;