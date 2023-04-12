import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/img1.jpg"
import image2 from "../../assets/img2.jpg"
import image3 from "../../assets/img3.jpg"
import styles from "./Slider.module.scss"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true
    };
    return (
      <div className={styles.slideImages}>
        <Slider {...settings} className={styles.container}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}