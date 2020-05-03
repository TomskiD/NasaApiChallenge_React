import React, { useContext, useState, useEffect } from 'react';
import './Header.css'
import { NasaContext } from '../NasaContext'

const Header = () => {

    const [dataNasa] = useContext(NasaContext);
    const data = dataNasa.slice(10,50).map((item) => item.img_src);
    const [randomBackground, setRandomBackground] = useState({
        current: Math.floor(Math.random() * (20 - 1)) +1, 
        next: Math.floor(Math.random() * (20 - 1)) +1
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const next = Math.floor(Math.random() * (20 - 1)) +1;
              setRandomBackground(prev =>({
                  current: prev.next,
                  next: next
              }));
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    const style = {
        backgroundImage: `url(${data[randomBackground.current]})`
    };
    return (
        <header className="header" style={style}>
            <img className="nextImage" src={randomBackground.next} />
            <div className="stars">
                <div className="header-text">
                    {dataNasa.length > 0 ? <h1>Nasa Api Challenge</h1> : <h1>Landing in 5..4..3..2..1</h1>}
                </div>
            </div>
        </header>
    )
}
export {
    Header
}