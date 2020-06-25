import React, {Component} from "react"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class App extends Component {
    constructor() {
        super()
        this.state = {
          loading: false,
          character: {}
        }
    }

    componentDidMount(){
      // fetch(url_of_data)
      this.setState({loading:true})
          
      fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
    }
    
    render() {
      const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
               {/* {this.state.loading? 
               <div><h1>Loading..</h1></div>: 
               this.state.character.name
               } */}
            </div>
        )
    }
}

export default App
