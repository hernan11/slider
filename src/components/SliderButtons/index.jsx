import React from "react";
import styles from "./index.module.css";

// React Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderButtons = ({ slides, currentSlide, setCurrentSlide }) => {
  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  return (
    <div className={styles.sliderButtons}>
      <button className={styles.sliderButton} onClick={prev}>
        <FaArrowLeft />
      </button>
      <button className={styles.sliderButton} onClick={next}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SliderButtons;
