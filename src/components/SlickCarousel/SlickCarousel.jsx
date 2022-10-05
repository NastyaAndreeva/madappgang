import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './common';
import { SliderContainer } from './SlickCarousel.styled';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <SliderContainer>
        <Slider {...settings}>
          {this.props.images.map(image => {
            return <img src={image} alt="dragon" key={image} width="200" />;
          })}
        </Slider>
      </SliderContainer>
    );
  }
}
