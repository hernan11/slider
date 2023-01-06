import React from "react";
import styles from "./index.module.css";

const SliderIndicators = ({ slides, currentIndex }) => {
  return (
    <div className={styles.sliderIndicators}>
      {slides.map((_, index) => (
        <button
          className={`${styles.sliderIndicator} ${
            currentIndex === index ? `${styles.active}` : ""
          }`}
          key={index}
        ></button>
      ))}
    </div>
  );
};

export default SliderIndicators;
