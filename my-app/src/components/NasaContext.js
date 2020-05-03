import React, { useEffect, useState, createContext } from 'react';

export const NasaContext = createContext();

export const NasaImgProvider = props => {

    const [dataNasa, setDataNasa] = useState([]);

    useEffect(() => {
        getNasaAPI();
    }, []);

    const API_KEY = 'eNnLHvcoUPwhxfQGhEPPPPCE2e35CzJuGZso6brW';

    const getNasaAPI = async () => {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
        const data = await response.json();
        const imgs = data.photos;
        setDataNasa(imgs);
    }

    return (
        <NasaContext.Provider value={[dataNasa,setDataNasa]}>
            {props.children}
        </NasaContext.Provider>
    );
} 