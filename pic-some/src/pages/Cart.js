import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../components/Provider";


function Cart() {
    const { cartItems, placeOrder, ordering } = useContext(Context);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));

    const total = (cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "GBP" });

    const button =
        <>
            {
                cartItems.length !== 0 ?
                    <button onClick={() => placeOrder()}>
                        {ordering}
                    </button>
                    : ''
            }
        </>;

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            <div className="order-button">
                {button}
            </div>
        </main>
    );
}

export default Cart;