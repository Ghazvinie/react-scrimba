import React from "react";
import productsData from '../pages/products/productsData';

function Products() {
    return (
        <div>
            <h1>Products Page</h1>

            <ul>
                {productsData.map(product => {
                    return (
                        <li key={product.id}>
                            <h3>£{product.price} {product.name}</h3>
                            <p>{product.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Products;