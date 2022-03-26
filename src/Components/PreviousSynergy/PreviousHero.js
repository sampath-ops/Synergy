import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./PreviousHero.css";

class PreviousHero extends Component {
    render() {

        const carouselImages = ["pic8","pic1","pic2","pic9"];

        return (
            <Carousel infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false} showStatus={false}>
                {
                    carouselImages.map((img,index)=>{
                        const image = require(`../../images/Memories/${img}.jpg`);
                        return(
                            <div key={index}>
                                <img src={image} alt={img}/>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
};

export default PreviousHero;