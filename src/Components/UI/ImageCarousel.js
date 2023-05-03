import React, { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import { shuffle } from "../../Utility/Utility";
import 'react-slideshow-image/dist/styles.css'

import { DATA } from "../../data"

const ImageCarousel = () => {

    const [slideImages, setSlideImages] = useState([]);
    // const spanStyle = {
    //     padding: '20px',
    //     background: '#efefef',
    //     color: '#000000',
    //     alignSelf: "flex-start",
    // }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        height: '400px',
        width: '100%',
        backgroundRepeat: "no-repeat, repeat",
    }
    

    useEffect(() => {
        if (!slideImages.length) {
            const items = [];
            for (let i = 0; i < DATA.length; i++) {
                const filteredItems = DATA[i].filter((item) => item.type === "event");
                items.push(...filteredItems);
            }
            setSlideImages(shuffle(items));
        }
   
    }, [slideImages.length]);
    return (
        <div style={{marginTop: 96, marginBottom: 96, }} className="slide-container">
            <Slide>
                {slideImages.length > 0 && slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.img})` }}>
                            {/* <span style={spanStyle}>{slideImage.description}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};



export default ImageCarousel;


