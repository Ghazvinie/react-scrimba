import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import { Context } from '../components/Provider';

function Image({ className, img }) {
    const [hover, setHover] = useState(false);
    const { toggleFave } = useContext(Context);
    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={img.url} className='image-grid' />
            {
                img.isFavorite ?
                    <>
                        <i className="ri-heart-fill favorite" onClick={() => toggleFave(img.id)}></i>
                    </>
                    : hover && !img.isFavorite ?
                        <>
                            <i className="ri-heart-line favorite" onClick={() => toggleFave(img.id)}></i>
                            <i className="ri-add-circle-line cart"></i>
                        </>
                        : <></>
            }
        </div >
    );
}

Image.propTypes = {
    className : PropTypes.string,
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;