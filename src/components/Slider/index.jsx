import React from "react";
import styles from "./index.module.css";

// Components
import SliderElement from "../SliderElement";

const Slider = ({ slides, currentSlide }) => {
  return (
    <article
      className={styles.slider}
      style={{ transform: `translateX(${-currentSlide * 100}%)` }}
    >
      {slides.map((slide) => (
        <SliderElement image={slide.image} name={slide.name} key={slide.id} />
      ))}
    </article>
  );
};

export default Slider;
