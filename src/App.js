import React from 'react';
import Product from './components/Product'
import schoolProducts from './schoolProducts'

function App() {
      const productComponents = schoolProducts.map(objectOfProduct =>{
        return (
          <Product key ={objectOfProduct.id} product = {objectOfProduct}/>
        
          );
      })
   

    
 
  return(

    <div className ="products">
      {productComponents}
    </div>
  );
}

export default App;
