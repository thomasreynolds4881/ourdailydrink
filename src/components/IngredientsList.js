import React from "react";

const IngredientsList = ({ ingredients }) => {
    return (
        <div className="ingredients-list">
            {ingredients.map((ingredient, index) => {
                if (ingredient) {
                    return (
                    <div key={index} className="ingredient">
                        <span>{ingredient}</span>
                    </div>
                    );
                }
            })}
        </div>
    );
}

export default IngredientsList;