import React from "react";
import productsData from '../pages/products/productsData';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h1>Products Page</h1>

            {productsData.map(product => {
                return (
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;