import React from 'react';
import Joke from './components/Joke'
import jokesData from './jokesData'

function App() {
    
  const jokeComponents =  jokesData.map(joke =>{
     return (
     <Joke key = {joke.id} question= {joke.question} punchLine = {joke.punchLine}/>
     )
    })
    console.log(jokeComponents)
  return (
    // <div className="jokes">
    //   <Joke joke={
    //     {
    //       question: "Nock Nock, Whos there?",
    //       punchLine: "Your mom"
    //     }
    //   } />
    //   <Joke joke={
    //     {
    //       question: "Vai vai vai vai vai?",
    //       punchLine: "Kakie peizazh"
    //     }
    //   } />
    //   <Joke joke={
    //     {
        
    //       punchLine: "xDDDDDDDDDDD"
    //     }
    //   } />
      
   
    // </div>
    <div>
    {jokeComponents}

    </div>
  );
}

export default App;
