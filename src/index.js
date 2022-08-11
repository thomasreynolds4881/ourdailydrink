import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CocktailCard from './components/CocktailCard';
import Footer from './components/Footer';
//import CountDownTimer from "./components/CountDownTimer";

const { useState } = React;
//const currentTime = new Date();
//let tomorrow = currentTime.getTime() + 85400000; // i think this logic is wrong

const App = () => {

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
        <h1 className='today'>Today's Drink</h1>
        <hr/>
        <CocktailCard drink={cocktail} />
        {/*<div className="countdown-container">
          <h4 className="countdown-text">Next cocktail:</h4><CountDownTimer countDownTimeStamp={tomorrow}/>
        </div>*/}
        <Footer />
      </div>
    );
  } else {
    fetchCocktail();
  }
}

// render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);