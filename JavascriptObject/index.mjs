// import * as m from  './math_utils.mjs'
import greet from './math_utils.mjs';


greet()

function greetAfter1sec(){
    console.log("Hello from the default function of index");
}

// setInterval(greetAfter1sec,5000);


async function getInsult() {
    const response = fetch("https://pirate.monkeyness.com/api/insult")
    const res = await response;
    const insult = await res.text()
    console.log(insult);
}

// setInterval(getInsult,5000);
getInsult()