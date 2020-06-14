import React from 'react';

function Header(){
    const name = "Lukas";

    const styles = {
        color: "blue"
    }
    return(
        
        <header className = "navbar">
            <h1>{name} Web Page Header</h1> 
            <p style = {styles}>Hello</p>
        </header>

    )
}
export default Header;