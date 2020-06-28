import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      surname: '',
      age: 0,
      gender: '',
      destination: '',
      Sugar: false,
      Carbs: false,
      Protein: false,
      isRestricted: true
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const {name,value, type, checked} = event.target
   type==="checkbox"? 
   this.setState({
        [name]: checked
    }) : 
   this.setState({[name]: value})
  }
  render() {
  

    return (
      <div>
        <form>
          <label>Name: </label>
          <input name = "name" onChange = {this.handleChange} value={this.state.name} type="text" placeholder = "Enter your name.."/>
          <br/>
          <label>Surname: </label>
          <input name = "surname" value = {this.state.surname} onChange = {this.handleChange} type="text" placeholder = "Enter your name.."/>
          <br/>
           <label>Age: </label>
          <input value = {this.state.age} name = "age" onChange = {this.handleChange} type="text" placeholder = "Enter your name.."/>
          <br/>
          <label>Gender: </label>
          <label>Male</label>
          <input name = "gender" checked = {this.state.gender === "male"} onChange={this.handleChange} value = "male" type="radio" />
          <label>Female</label>
          <input name = "gender" checked = {this.state.gender === "female"} onChange={this.handleChange} value = "female" type="radio"/>
          <br/>
          <label>Destination: </label>
          <select name = "destination" onChange={this.handleChange} value = {this.state.destination}>
            <option value="Spain">Spain</option>
            <option value="Colombia">Colombia</option>
            <option value="Venesuela">Venesuela</option>
          </select>
          <br/>
          <label>Dietary restrictions: </label>
          <input onChange={this.handleChange} checked = {this.state.Sugar} name = "Sugar" type="checkbox"/> Sugar
          <input onChange={this.handleChange} checked = {this.state.Protein} name = "Protein" type="checkbox"/> Protein
          <input value = {this.state.restrictions} onChange={this.handleChange} checked = {this.state.Carbs} name = "Carbs" type="checkbox"/> Carbs
          <br/>
          <button>Submit</button>
        </form>
        <hr/>
        <h2>Entered information: </h2>
        <p>Your age: {this.state.age} </p>
        <p>Your name: {this.state.name} </p>
        <p>Your surname: {this.state.surname} </p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination} </p>
        <p>Your dietary restrictions: 
          {this.state.Sugar ? "For Sugar, " : ""} 
          {this.state.Protein  ? "For Protein, " : ""}
          {this.state.Carbs  ? "For Carbs " : ""}</p>
      </div>
    )
  }
}

export default App
