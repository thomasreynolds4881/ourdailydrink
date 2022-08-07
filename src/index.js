import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CocktailCard from './components/CocktailCard';
const { useState, useEffect } = React;

const App = () => {

  const getNextDay = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let timeToWait = (24*60*60) - (h*60*60) - (m*60) - s;
    return timeToWait;
  }

  const [cocktail, setCocktail] = useState(null);
  const [wait, setWait] = useState(getNextDay());

  const fetchCocktail = async () => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const data = await res.json();
    setCocktail(data.drinks[0]);
    console.log("Time until next cocktail: " + Math.round(wait/60/60) + " hours");
  }

  useEffect(() => {
    const myInterval = setInterval(() => {
      fetchCocktail();
    }, wait*1000);
    setWait(getNextDay());
    return () => clearInterval(myInterval);
  }, [cocktail, wait, fetchCocktail]);

  if (cocktail) {
    return (
      <div className='content'>
        <h1>Today's cocktail...</h1>
        <div className="cocktail-container">
          <CocktailCard drink={cocktail} />
        </div>
      </div>
    );
  } else {
    fetchCocktail();
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);