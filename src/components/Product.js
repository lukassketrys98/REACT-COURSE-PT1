import React from 'react'

function Product(props) {
    console.log(props)
    return (
        <div className = "product">
            <h1>Name: {props.name}</h1>
            <h3>Price: {` ${props.price} $`}</h3>
            <p>Description: {props.description}</p>
        </div>
      
    );
}

export default Product;