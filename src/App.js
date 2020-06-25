import React, {Component} from "react"
import Conditional from "./conditional"
import Numb from './components/numb'
import LoggedIn from './components/LoggedIn'
import LoggedOut from './components/LoggedOut'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            number: 10,
            unreadMessages: [
              "Call your mom!",
              "New spam email available. All links are definitely safe to click."
          ],
          isLoggedIn: false
        }
        this.LogBtn = this.LogBtn.bind(this);
    }
    LogBtn(){
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                number: 22
            })
        }, 1500)
    }
    // &&
    // 
    render() {
        // return (
        //     <div>
        //       {this.state.number <= 10 ?
        //       <h1>Noob</h1> : 
        //       <Numb/>
        //       }
        //       {this.state.isLoading ? 
        //       <h1>Loading...</h1> :
        //       <Conditional/>


        //     }
        //     </div>
        // )

        // return(
        //   <div>
        //   {  this.state.unreadMessages.length > 0 && 
        //     <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        //   }
        //     </div>
        // )
        return(
          <div>
              {
                !this.state.isLoggedIn? 
                <LoggedOut LogBtn = {this.LogBtn}/> : <LoggedIn LogBtn = {this.LogBtn}/>
              
              }
          </div>
        )
    }
}

export default App
