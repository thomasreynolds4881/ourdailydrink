import React from "react";
import IngredientsList from "./IngredientsList";
//import { useColor } from "color-thief-react";

// get cocktail card, pass ingredient and measure values to IngredientsList component
const CocktailCardDaily = ({ drink }) => {
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

  return (
    <div className="cocktail-card-daily">
      <div className="img-container-daily">
        <img className="cocktail-img-daily" src={drink.strDrinkThumb} alt="" />
      </div>
      <div className="card-daily">
        <div className="card-content-daily">
          <h1 className="drink-text-daily">{drink.strDrink}</h1>
          <IngredientsList measures={Object.values(drink).slice(33,48)} ingredients={Object.values(drink).slice(18,33) } />
          <div className="instruct-container-daily">
            <p className="instruct-daily" >{drink.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailCardDaily;