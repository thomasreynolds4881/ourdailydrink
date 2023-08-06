import React from "react";
import IngredientsList from "./IngredientsList";
//import { useColor } from "color-thief-react";

// get cocktail card, pass ingredient and measure values to IngredientsList component
const CocktailCard = ({ drink }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  //const { useEffect } = React;

  //let proxyURL = 'https://cocktail-proxy-da7590e6542f.herokuapp.com/';
  //let imageURL = proxyURL + 'https://wallpapers.com/images/high/cool-picture-art-of-lion-rlst9ftvz1dvvn37.webp';
  //console.log(imageURL);
  //const { data, loading, error } = useColor(imageURL, "hex", "Anonymous", 10);
  /*
  useEffect(() => {
    if (loading)
      console.log('still loading...');
    else if (error)
      console.error(error);
    else
      console.log('got a color!', data);
  }, [data,loading,error]);
  */

  function handleClick(e) {
    e.preventDefault();
    setIsVisible(!isVisible);
  }

  function getDate(epoch) {
    let date = new Date(0);
    let diff = epoch - date;
    date.setDate((date.getDate() + diff));
    return (date.getMonth()+1) + "/" + (date.getDate()) + "/" + date.getFullYear();
  }

  return (
    <div className="cocktail-card">
      <div className="date-container">
        <h2 className="date">{getDate(drink.date)}</h2>
      </div>
      <div className="card">
        <img className="cocktail-img" src={drink.strDrinkThumb} alt="" />
        <div className="card-content">
          <h1 className="drink-text">{drink.strDrink}</h1>
          <IngredientsList measures={Object.values(drink).slice(33,48)} ingredients={Object.values(drink).slice(18,33)} />
        </div>
        <div className="recipe-button-container">
          <button className="recipe-button" onClick={handleClick} >
            {isVisible ? "Show Preparation" : "Hide Preparation"}
          </button>
        </div>
      </div>
      <div className="instruct-container">
        <p className="instruct" style={{display: isVisible ? 'none' : 'inline-block'}}>{drink.strInstructions}</p>
      </div>
    </div>
  );
}

export default CocktailCard;