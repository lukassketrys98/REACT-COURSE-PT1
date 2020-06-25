import React from "react"


function LoggedOut(props){
    return(
        <div>
            <div className="app">
            <button onClick = {props.LogBtn}>Logged Out</button>

            </div>
        </div>
    )


}

export default LoggedOut