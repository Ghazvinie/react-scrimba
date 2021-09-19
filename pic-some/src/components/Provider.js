import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [photos, setPhotos] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json');
            const data = await res.json();
            setPhotos(data);
        };
        fetchApi();
    }, []);


    return (
        <Context.Provider value={photos}>
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };