import { useState } from "react";

import {
  SliderContainer,
  SliderTitle,
  SliderDescription,
  SliderArrow,
  SliderDots,
  SliderDot,
} from "../theme/styled";

function Slider() {

  const slides = [
    {
      title: "Complete Auth Flow",
      description:
        "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions.",
    },

    {
      title: "Responsive Design",
      description:
        "Practice creating responsive layouts that work beautifully on desktop, tablet and mobile.",
    },

    {
      title: "Modern React Components",
      description:
        "Learn reusable components, routing, themes and clean React architecture.",
    },
  ];

  const [currentSlide, setCurrentSlide] =
    useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (currentSlide + 1) % slides.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + slides.length) %
        slides.length
    );
  };

  return (
    <SliderContainer>

      <SliderArrow
        left
        onClick={previousSlide}
      >
        ‹
      </SliderArrow>

      <SliderTitle>
        {slides[currentSlide].title}
      </SliderTitle>

      <SliderDescription>
        {slides[currentSlide].description}
      </SliderDescription>

      <SliderArrow onClick={nextSlide}>
        ›
      </SliderArrow>

      <SliderDots>
        {slides.map((_, index) => (
          <SliderDot
            key={index}
            active={index === currentSlide}
            onClick={() =>
              setCurrentSlide(index)
            }
          />
        ))}
      </SliderDots>

    </SliderContainer>
  );
}

export default Slider;