import React, { Component } from "react";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/image_01.jpg"
import image2 from "../../assets/image_02.jpg"
import image3 from "../../assets/image_03.jpg"

import styles from "./Slider.module.scss"
import SliderItem from "../SliderItem";
import NextSlideButton from "../NextSlideButton";
import PrevSlideButton from "../PrevSlideButton";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <NextSlideButton />,
    prevArrow: <PrevSlideButton />
  };

  return (
    <section className={styles.slideImages}>
      <Slider {...settings} className={styles.container}>
        <SliderItem image={image1} altText="Imagem 1" />
        <SliderItem image={image2} altText="Imagem 2" />
        <SliderItem image={image3} altText="Imagem 3" />
      </Slider>
    </section>
  );

}

export default HomeSlider;

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3500,
//       pauseOnHover: true
//     };
//     return (
//       <div className={styles.slideImages}>
//         <Slider {...settings} className={styles.container}>
//           <div>
//             <img src={image1} alt="" />
//           </div>
//           <div>
//             <img src={image2} alt="" />
//           </div>
//           <div>
//             <img src={image3} alt="" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }