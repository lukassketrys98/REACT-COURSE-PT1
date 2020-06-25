
import React from "react"

function Numb(){

    var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

    return (
        <div>
            <h1 style = {{background: bgColors.Cyan}}>Happy birthday!</h1>
        </div>
    )
}

export default Numb