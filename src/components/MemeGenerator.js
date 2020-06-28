import React, {Component} from 'react';

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        }
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div>
              <h1>Hello world</h1>
            </div>
          )
    }
 
}

export default MemeGenerator;
