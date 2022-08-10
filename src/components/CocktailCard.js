import React from "react";
import IngredientsList from "./IngredientsList";

// get cocktail card, pass ingredient and measure values to IngredientsList component
const CocktailCard = ({ drink }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isBold, setIsBold] = React.useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsVisible(!isVisible);
  }

  function handleOn(e) {
    e.preventDefault();
    setIsBold(true);
  }

  function handleOff(e) {
    e.preventDefault();
    setIsBold(false);
  }

  function getDate(epoch) {
    let date = new Date(0);
    let diff = epoch - date;
    date.setDate((date.getDate() + diff));
    return (date.getMonth()+1) + "/" + (date.getDate()+1) + "/" + date.getFullYear();
  }

  return (
    <div>
      <div className="date-container">
        <h2 className="date">{getDate(drink.date)}</h2>
      </div>
      <div className="card">
        <img src={drink.strDrinkThumb} alt="" />
        <h1>{drink.strDrink}</h1>
        <IngredientsList measures={Object.values(drink).slice(33,48)} ingredients={Object.values(drink).slice(18,33)} />
      </div>
      <div className="instruct-container">
        <p className="instruct" style={{display: isVisible ? 'none' : 'inline-block'}}>{drink.strInstructions}</p>
        <button className="recipe-button" onClick={handleClick} onMouseEnter={handleOn} onMouseLeave={handleOff} style={{fontWeight: isBold ? 'bold' : 'normal'}}>
          {isVisible ? "Show Recipe" : "Hide Recipe"}
        </button>
      </div>
      
    </div>
  );
}

export default CocktailCard;