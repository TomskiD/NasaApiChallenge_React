import React, { useContext, useState } from "react";
import './Images.css'
import { NasaContext } from './NasaContext';

const Images = () => {

    const [arrayImg] = useContext(NasaContext);
    const [visible, setVisible] = useState(6);

    const handleClick = () => {
        setVisible(visible + 6)
    }
    const first30Imgs = arrayImg.slice(0, 30);

    return (
        <React.Fragment>
            <div className="nasaPictures">
                <div className="stars">
                    <div className="container">
                        <div className="text">
                            <h2 className="text-header">Pictures from Mars</h2>
                        </div>
                        <div className="pictures">
                            {
                                first30Imgs.slice(0, visible).map((item) => {
                                    return (
                                        <div className="picture" key={item.id}>
                                            <img src={item.img_src} alt="pic" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='loadMore'>
                            {visible < first30Imgs.length ? <button className='btn' onClick={handleClick}>load more!</button> : null}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export {
    Images
}