import { useCallback, useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
// import { GoDotFill } from "react-icons/go";
import { PiDotBold } from "react-icons/pi";

const BannerSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="slider">
      <div className="slide-outer-container">
        <div
          className="slide-container"
          style={{
            width: `${100 * slides.length}vw`,
            transform: `translateX(calc(${-(currentIndex * 100)}vw))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slides[index].url})`,
                width: "100vw",
              }}
            >
              <h3 className="slide-title">{slide.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <GrPrevious className="btn-slide" onClick={goToPrev} />
        <div className="dots">
          {slides.map((_, index) => (
            <PiDotBold
              className="dot"
              key={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <GrNext className="btn-slide" onClick={goToNext} />
      </div>
    </div>
  );
};

export default BannerSlider;
