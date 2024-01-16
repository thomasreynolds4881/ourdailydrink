import React from 'react';
import '../index.css';

const About = () => {
  return(
    <div className="cocktail-card-container">
      <div className="about-container">
        <h1 className="about-h1">Info</h1>
        <p className="about-p">Our Daily Drink is a website that generates a new drink to try every day! The database refreshes every day at 12:00 am CST. This site fetches its drinks from TheCocktailDB, a free online cocktail API. There are 600+ drinks currently in the database, ranging from classics to party punches to mocktails to cursed shots. While this method is convenient and mostly refined, I don't have full control over the quality of the drinks generated. I am considering creating a blacklist that would prevent any notably bad ones from being picked in the future!</p>
        <h1 className="about-h1">Links</h1>
        <a className="about-link" href="https://github.com/thomasreynolds4881/ourdailydrink">GitHub</a>
        <div></div>
        <a className="about-link" href="https://www.thecocktaildb.com/">TheCocktailDB</a>
      </div>
    </div>
  );
}

export default About;