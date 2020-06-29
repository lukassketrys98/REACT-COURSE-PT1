import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App(){
  const [count, setCount] = useState(0)
 
  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() =>{

  })
  return(
    <div>
    <h1> {count} </h1>
    <button onClick = {increment}>Change!</button>
    <button onClick = {decrement}>Change!</button>
    </div>
   
  )
}

export default App