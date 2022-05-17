// @flow
import * as React from 'react';
import Slider from "react-slick";


export default function About(props) {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1200,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };
  return (
    <div>
      <h3>About</h3>
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    </div>
  );
};