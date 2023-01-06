import React from "react";
import styles from "./index.module.css";

// Components
import Slider from "../Slider";
import SliderIndicators from "../SliderIndicators";

const SliderContainer = ({ slides, currentSlide }) => {
  return (
    <section className={styles.sliderContainer}>
      <Slider slides={slides} currentSlide={currentSlide} />
      <SliderIndicators slides={slides} currentIndex={currentSlide} />
    </section>
  );
};

export default SliderContainer;
