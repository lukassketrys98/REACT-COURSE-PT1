import React from 'react';


//practice 1

// class App extends React.Component {
//   //constructor is a method that initializes class/component values when it is created
//   constructor(){
//     super() //goes to parent class (super class), and the app component can use methods and everything from parent
    
//     this.state = {
//       answer: "yes",
//       name: "Lukas",
//       age: 21,
//       position: "CEO"
//     }
    

//   }

//   render() {
//     return (
//       <div>
//       <h1>Is state important to know? {this.state.answer}</h1>
//       <p>{`${this.state.position} has logged in.`}</p>
//       <p>Name: {this.state.name}, age: {this.state.age}</p>
//   </div>
//     )
//   }
// }


//practice 2

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      isLoggedIn: false
    }
  }

  render(){
    let stringas
    if(this.state.isLoggedIn){
      stringas = 'in'
    }else{
     stringas = 'out'
    }
    
    return(
      <div>
        
        <h1>You are currently logged {stringas} </h1>
      </div>
    )
  }
}

export default App;
