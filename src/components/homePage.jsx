import React from "react";
import { useState } from "react";

const HomePage = (props) => {

const [age,setAge] = useState({
    year : 18
});

// Destructuring of props

const {name} = props

const {year} = age

const changeAge = () =>{

    
setAge({
  
    year : year + 1,
})
};

    return(
        <div>
            <h1>Welcome {name} , your age is {year}</h1>
        <button onClick={changeAge}> increment Age</button>
        </div>
    );
}

export default HomePage;