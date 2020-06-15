import React from 'react';
import Product from './components/Product'
import schoolProducts from './schoolProducts'

function App() {
      const productComponents = schoolProducts.map(objectOfProduct =>{
        return (
          <Product key = {objectOfProduct.id} name = {objectOfProduct.name} price = {objectOfProduct.price} description = {objectOfProduct.description}/>
        );
      })
 
  return(
    {productComponents}
  );
}

export default App;
