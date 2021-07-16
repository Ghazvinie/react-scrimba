import React from "react";
import productsData from './vschoolProducts';
import Product from './components/Product';

function App() {
  return (
    <div>
        <Product products={productsData} />
    </div>
  );
}

export default App;