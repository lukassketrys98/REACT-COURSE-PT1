import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateData = this.updateData.bind(this)
    }
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }
    updateData(){
       const randomArray = this.state.allMemeImgs[Math.floor(Math.random()*this.state.allMemeImgs.length)]
       const randomUrl = randomArray.url
       this.setState({
           randomImage: randomUrl
       })
 
    }
    handleSubmit(event){
        event.preventDefault()
    }
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes').then(response => response.json())
            .then(data => {
                console.log(data.data.memes)
            
                this.setState({
                    allMemeImgs: data.data.memes
                })

            })

    }

    render() {

        return (
            <div>
                <form className="meme-form" onSubmit = {this.handleSubmit}>
                    <input
                        value={this.state.topText}
                        name="topText"
                        placeholder="Enter the Top text"
                        type="text"
                        onChange = {this.handleChange} />

                    <input
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Enter the Bottom text"
                        type="text"
                        onChange = {this.handleChange} />
                    <button onClick = {this.updateData} >Gen</button>
                </form>
                <div className ="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className = "top">{this.state.topText}</h2>
                    <h2 className = "bottom">{this.state.bottomText}</h2>
                </div>
               
            </div>
        )
    }

}

export default MemeGenerator;
