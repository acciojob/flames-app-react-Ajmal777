import React, { Component, useState } from "react";
import '../styles/App.css';

function App() {
    const obj = {
        0: "Siblings",
        1: "Friends",
        2: "Love",
        3: "Affection",
        4: "Marriage",
        5: "Enemy",
    }

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [result, setResult] = useState("");

    function calculate(){
        if(!firstName || !secondName){
            setResult("Please Enter valid input");
            return;
        }
        const first = new Map();
        const second = new Map();
        let val = firstName.length + secondName.length;
        for(let c of firstName){
            if(!first.has(c)){
                first.set(c, 1);
            }
            else first.set(c, first.get(c)+1);
        }
        for(let c of secondName){
            if(!second.has(c)){
                second.set(c, 1);
            }
            else second.set(c, second.get(c)+1);
        }
        first.forEach((value, key) => {
            if(second.has(key)){
                const k1 = value;
                const k2 = second.get(key);
                val -= ((k1 + k2) - Math.abs(k1 - k2));
            }
        })
        setResult(obj[val % 6]);
    }

    function clearFields(){
        setFirstName("");
        setSecondName("");
        setResult("");
    }
    
    return (
        <div id="main">
            <input data-testid="input1" name="name1" value={firstName} placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)}></input>
            <input data-testid="input2" name="name2" value={secondName} placeholder="Enter second name" onChange={(e) => setSecondName(e.target.value)}></input>
            <button data-testid="calculate_relationship" onClick={calculate}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearFields}>Clear</button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    )
}


export default App;
