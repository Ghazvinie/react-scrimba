import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [ordering, setOrdering] = useState('Place Order');

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json');
            const data = await res.json();
            setPhotos(data);
        };
        fetchApi();
    }, []);

    const toggleFave = (id) => {
        const updatedArr = photos.map((image) => {
            if (image.id === id) {
                image.isFavorite = !image.isFavorite 
            }
            return image;
        });
        setPhotos(updatedArr);
    };


    const addToCart = (image) => {
        setCartItems((prevItems) => [
            ...prevItems, image
        ]);
    };

    const removeFromCart = (image) => {
        const filtered = cartItems.filter(pic => pic.id !== image.id);
        setCartItems(filtered);
    };

    const removeCartItem = (toRemove) => {
        const filtered = cartItems.filter(item => toRemove.id !== item.id)
        setCartItems(filtered);
    };

    const placeOrder = () => {
        setOrdering('Ordering...');
        setTimeout(() => {
            setCartItems([]);
            setOrdering('Order Placed!');
        }, 3000)
    }

    return (
        <Context.Provider value={{photos, toggleFave, addToCart, cartItems, removeFromCart, removeCartItem, placeOrder, ordering}}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };