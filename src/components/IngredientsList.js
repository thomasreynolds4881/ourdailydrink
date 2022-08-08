import React from "react";

const IngredientsList = ({ measures, ingredients }) => {
    // lol
    return (
        <div className="ingredients-list">
            {ingredients.map((ingredient, index) => {
                if (ingredient) {
                    return (
                    <div key={index} className="ingredient">
                        <span>{measures[index] + ingredient}</span>
                    </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default IngredientsList;