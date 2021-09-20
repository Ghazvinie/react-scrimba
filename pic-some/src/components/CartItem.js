import React, { useContext, useState } from "react";
import { Context } from "./Provider";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
    const { removeCartItem } = useContext(Context);
    const [hover, ref] = useHover();


    const trashIconStyle = hover ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';

    return (
        <div className="cart-item">
            <i className={trashIconStyle} ref={ref}
                onClick={() => removeCartItem(item)} />
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    );
}

export default CartItem;