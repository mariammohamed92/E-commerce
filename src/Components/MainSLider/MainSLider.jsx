import React from 'react'
import Slider from "react-slick";
import slider4 from '../../images/sliders/slider-2.jpeg'


export default function MainSLider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <>
            <Slider {...settings}>
            <img src={slider4} alt="" />
            <img src={slider4} alt="" />
            <img src={slider4} alt="" />
            <img src={slider4} alt="" />
            </Slider>
        </>
    )
}
