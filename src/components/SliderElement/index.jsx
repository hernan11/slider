import React from "react";
import styles from "./index.module.css";

const SliderElement = ({ image, name }) => {
  return (
    <figure className={styles.sliderElement}>
      <img src={image} alt={name} />
    </figure>
  );
};

export default SliderElement;
