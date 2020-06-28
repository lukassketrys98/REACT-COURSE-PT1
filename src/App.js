import React, {useState} from "react"


function App(){
  const [count, setCount] = useState(0)
 
  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }
  return(
    <div>
    <h1> {count} </h1>
    <button onClick = {increment}>Change!</button>
    <button onClick = {decrement}>Change!</button>
    </div>
   
  )
}

export default App