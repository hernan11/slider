import React, { useState } from "react";

//Components
import SliderContainer from "../components/SliderContainer";
import SliderButtons from "../components/SliderButtons";

//Data
import { data } from "../data";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <main>
      <SliderContainer slides={data} currentSlide={currentSlide} />
      <SliderButtons
        slides={data}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </main>
  );
};

export default App;
