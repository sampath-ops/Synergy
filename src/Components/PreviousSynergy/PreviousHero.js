import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  img from "../../images/eventPics/adzap.jpg";

class PreviousHero extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <img src={img} alt=""/>
                </div>
            </Carousel>
        );
    }
};

export default PreviousHero;