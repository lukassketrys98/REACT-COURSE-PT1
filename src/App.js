import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: 'blue'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type,checked} = event.target
    type === "checkbox"? this.setState({[name]: checked}): this.setState(
      { 
        [name]: value
      }
      )
  }
  render() {
  

    return (
      <div>
        <form>
          {/* text */}
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
          <br />
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          {/* textarea */}
          <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
          {/* input type checkbox */}
          <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
          {/* input type radio */}

                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <label>You are a {this.state.gender}</label>
          {/* input type select*/}
          <h1>Favorite color: </h1>
          <select 
          value = {this.state.favColor}
          onChange = {this.handleChange}
          name='favColor'
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
          </select>
      <h1>Your favorite color is {this.state.favColor}</h1>
      <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App
