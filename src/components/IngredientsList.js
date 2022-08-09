import React from "react";

const IngredientsList = ({ measures, ingredients }) => {

    // build the list of ingredients
    let ingredients_measures = [];
    let measure = "";
    for (let i = 0; i < ingredients.length; i++) {
        measures[i] ? measure = ' [ ' + measures[i] + ']' : measure = "";
        if (ingredients[i])
            ingredients_measures.push(ingredients[i] + measure);
    }

    // return render of the list of ingredients
    return (
        <div className="ingredients-list">
            {ingredients_measures.map((item, index) => {
                if (item) {
                    return (
                    <div key={index} className="ingredient-item">
                        <span>{item}</span>
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