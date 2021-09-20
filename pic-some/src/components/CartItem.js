import React, { useContext, useState } from "react";
import { Context } from "./Provider";

function CartItem({ item }) {
    const { removeCartItem } = useContext(Context);
    const [hover, setHover] = useState(false);

    const trashIconStyle = hover ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

    return (
        <div className="cart-item">
            <i className={trashIconStyle}
                onClick={() => removeCartItem(item)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} />
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    );
}

export default CartItem; 