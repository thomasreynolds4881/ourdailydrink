import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CocktailCard from './components/CocktailCard';

const { useState } = React;

const App = () => {

  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    const res = await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/api-vuizz/endpoint/cocktail`);
    const data = await res.json();
    console.log(data);
    setCocktail(data);
  }

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