import React from 'react'

function Product(props) {
    
    return (
        <div className = "product">
            <h1>Name: {props.product.name}</h1>
            <h3>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p>Description: {props.product.description}</p>
        </div>
      
    );
}

export default Product;