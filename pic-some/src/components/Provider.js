import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

    return (
        <Context.Provider value={{photos, toggleFave, addToCart, cartItems, removeFromCart}}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };