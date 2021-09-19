import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from '../components/Provider';
import getClass from "../utils/getClass";

function Photos() {
    const { photos } = useContext(Context);
    const images = photos.map((image, idx) => (
        <Image key={image.id} img={image} className={getClass(idx)} />
    ));

    return (
        <main className="photos">
            {images}
        </main>
    );
}

export default Photos;