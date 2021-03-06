import React from "react";

const Product = (props) => {
    return props.products.map(product => (
        <table key={product.id}>
            <tr>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString("en-US", { style: "currency", currency: "GBP" })}</td>
                <td>{product.description}</td>
            </tr>
        </table>
    ));
}

export default Product;