import React from "react";
import CocktailCard from '../components/CocktailCard';

const { useState } = React;

const History = () => {

    const [histCount, setHistCount] = useState(0);
    const [history, setHistory] = useState(null);
    const [content, setContent] = useState([]);
    const [isMore,] = useState(true);

    const getHistory = async () => {
        const res = await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/api-vuizz/endpoint/history`);
        const data = await res.json();
        setHistory(data);
    }

    const generateSome = () => {
        let newContent = [...content];
        for (let i = histCount; i < histCount + 5; i++) {
            if (histCount >= 50) break;
            newContent.push(
                <div key={i}>
                    <CocktailCard drink={history.drinks[i]} />
                </div>
            )
        }
        setHistCount(histCount + 5);
        setContent(newContent);
    }

    if (history == null){
        getHistory();
        return (
            <div>
                <button className="historyButton">Loading...</button>
            </div>
        )
    } else {
        if (histCount === 0) generateSome(); // render 5 right away
        return (
            <div>
                <div className="cocktail-card-container">
                    <div className="history">
                        {content}
                    </div>
                    {isMore ?
                    <div className="historyButtonContainer">
                        <button className="historyButton" onClick={generateSome} >{histCount < 50 ? "More..." : "No more to show"}</button>
                    </div> : '' }
                </div>
            </div>
        );
    }
}

export default History;