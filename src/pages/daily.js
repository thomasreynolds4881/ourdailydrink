import React from 'react';
import '../index.css';
import CocktailCard from '../components/CocktailCard';
//import CountDownTimer from "./components/CountDownTimer";

const { useState } = React;

const Daily = () => {

  // cocktail represents the current cocktail being displayed
  const [cocktail, setCocktail] = useState(null);

  // get the cocktail from the API endpoint
  const fetchCocktail = async () => {
    //console.log('fetching cocktail...');
    const res = await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/api-vuizz/endpoint/today`);
    const data = await res.json();
    //console.log('connection established');
    //console.log(data);
    setCocktail(data);
  }

  // get the cocktail when the app loads
  if (cocktail) {
    return (
      <div>
        <CocktailCard drink={cocktail} />
      </div>
    );
  } else {
    fetchCocktail();
  }
}

export default Daily;