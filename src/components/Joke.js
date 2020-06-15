import React from 'react'

function Joke(props) {
   
    return (
    //    <div className = "joke">
    //        <h1 style = {{display: !props.joke.question && "none" }}>Question: {props.joke.question}</h1>
    //        <h3 style = {{color: !props.joke.question && "red" }}>Punchline: {props.joke.punchLine} </h3>
    //    </div>
        <div className = "joke">
           <h1 style = {{display: !props.question && "none" }}>Question: {props.question}</h1>
           <h3 style = {{color: !props.question && "red" }}>Punchline: {props.punchLine} </h3>
       </div>
    );
}

export default Joke;