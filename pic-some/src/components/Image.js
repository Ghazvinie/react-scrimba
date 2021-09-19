import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { Context } from '../components/Provider';

function Image({ className, img }) {
    const [hover, setHover] = useState(false);
    const { toggleFave, addToCart, cartItems, removeFromCart } = useContext(Context);

    const heartIcon =
        <>
            {
                img.isFavorite ?
                    <i className="ri-heart-fill favorite" onClick={() => toggleFave(img.id)}></i>
                    : hover && !img.isFavorite ?
                        <i className="ri-heart-line favorite" onClick={() => toggleFave(img.id)}></i>
                        : ''
            }
        </>;

    const inCart = (image) => {
        const isInCart = cartItems.find(pic => pic.id === image.id)
        return isInCart
    };

    const cartIcon =
        <>
            {
                inCart(img) ?
                    <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
                    : hover ?
                        <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
                        : ''
            }
        </>;




    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={img.url} className='image-grid' />
            {heartIcon}
            {cartIcon}
            {/* // img.isFavorite ?
                //     <>
                //         <i className="ri-heart-fill favorite" onClick={() => toggleFave(img.id)}></i>
                //     </>
                //     : hover && !img.isFavorite ?
                //         <>
                //             <i className="ri-heart-line favorite" onClick={() => toggleFave(img.id)}></i>
                //             <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
                //         </>
                //         : <></> */}

        </div >
    );
}

Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;