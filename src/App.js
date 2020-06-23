// https://scrimba.com/g/greacthooks

import React from "react"
import randomcolor from 'randomcolor'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ''
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            console.log("aa: ", prevState.count)
            return {
                count: prevState.count + 1
            }
        })
    }

    
    componentDidUpdate(prevProps, prevState) {
      console.log("prevstate count: ", prevState.count)
      console.log("this.state.count: ",this.state.count)
    //   if(prevState.count !== this.state.count) {
    //     const newColor = randomcolor()
    //     this.setState({color: newColor})
    // }
    }
    
    render() {
    
        return (
            <div>
                <h1 style = {{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App
