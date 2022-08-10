import React, {useEffect} from "react";
import CountDownTimer from "./CountDownTimer";
import IngredientsList from "./IngredientsList";
//import dayjs from "dayjs"

const currentTime = new Date()
let tomorrow = currentTime.getTime() + 85400000


const CocktailCard = ({ drink }) => {

  useEffect(()=>{
  const updateDay = setInterval(()=>{
   return tomorrow + 85400000
    }, 85400000)
    return ()=>{clearInterval(updateDay)}
  }, [])

    return (
      <div className="card">
        <img src={drink.strDrinkThumb} alt="" />
        <h1>{drink.strDrink}</h1>
        <IngredientsList measures={Object.values(drink).slice(33,48)} ingredients={Object.values(drink).slice(18,33)} />
        <p>{drink.strInstructions}</p>
        <CountDownTimer countDownTimeStamp={tomorrow}/>
      </div>
    );
}

export default CocktailCard;