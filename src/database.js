const { MongoClient } = require('mongodb');
const axios = require('axios');

async function main() {
    const uri = "mongodb+srv://thomasreynolds4881:8uHW7M4azrbFg3ir@atlascluster.rlcljiw.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try {
        setInterval(async function() {
            await client.connect();
            let newCocktail = await fetchCocktail();
            let date = new Date().toLocaleString('en-US')
            date = date.substring(0, date.indexOf(','))
            newCocktail.date = date;
            await postCocktail(client, newCocktail);
        }, getWaitTime()*1000);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

async function fetchCocktail() {
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const data = res.data;
    return data.drinks[0];
}

async function postCocktail(client, newCocktail) {
    const res = await client.db("cocktails").collection("cocktail_history").insertOne(newCocktail);
    console.log(`New cocktail created with the following id: ${res.insertedId}`);
}

function getWaitTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let timeToWait = (24*60*60) - (h*60*60) - (m*60) - s;
    console.log("Time until next cocktail: " + Math.round(timeToWait/60/60) + " hours");
    return timeToWait;
}