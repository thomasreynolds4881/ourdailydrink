import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CocktailCard from './components/CocktailCard';

const { useState } = React;

const App = () => {

  // cocktail represents the current cocktail being displayed
  const [cocktail, setCocktail] = useState(null);

  // get the cocktail from the API endpoint
  const fetchCocktail = async () => {
    //console.log('fetching cocktail...');
    const res = await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/api-vuizz/endpoint/cocktail`);
    const data = await res.json();
    //console.log('connection established');
    //console.log(data);
    setCocktail(data);
  }

  // get the cocktail when the app loads
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

// render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);