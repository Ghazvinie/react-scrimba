import React from 'react';
import productsData from './productsData';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const product = productsData.find(product => product.id == id)
    console.log(product)
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>£{product.price}</h2>
            <h3>{product.description}</h3>
        </div>
    );
}

export default ProductDetail;