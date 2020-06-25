import React from "react"


function LoggedIn(props){
    return(
        <div>
            <div className="app">
                <div className="navbar">
                    
                </div>
                <button onClick = {props.LogBtn}>Logged In</button>

            </div>
        </div>
    )
    
}

export default LoggedIn