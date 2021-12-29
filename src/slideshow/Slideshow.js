import React from 'react';
import './Slideshow.css';

function Slideshow(props) {

  const {slides, delay} = props;
  console.log(slides, delay);
  const [index, setIndex] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      resetTimeout();
      window.removeEventListener('resize', handleWindowSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const isMobile = width <= 768;

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
        !isMobile ?
        (<a href={slide.link}>
          <img
            className="slide"
            width="100%"
            key={index}
            src={slide.image}
            alt=""
          ></img>
          </a>)
          :
          (<a href={slide.link}>
            <img
              className="slide"
              width="100%"
              key={index}
              src={slide.mobile}
              alt=""
            ></img>
            </a>

          )
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;