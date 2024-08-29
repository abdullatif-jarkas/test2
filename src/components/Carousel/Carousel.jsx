import "./Carousel.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle
} from "@fortawesome/free-solid-svg-icons";


function Carousel({CarouselContent}) {
  const [current, setCurrent] = useState(1);


  
  const slideLeft = () => {
    setCurrent(current === CarouselContent.length ? 1 : current + 1);
  };

  const slideRight = () => {
    setCurrent(current === 1 ? CarouselContent.length : current - 1);
  };


  console.log(current);
  return (
    <div id="home" className="hero flex">
      <div className="carousel-wrapper">
        {CarouselContent.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.id == current
                  ? "carousel-img carousel-active"
                  : "carousel-img"
              }
            >
              <img src={item.src} alt="hero-banner" />
              <div className="hero-content container">
                <p className="hero-subtitle">
                  {item.location1}
                  <span>{item.location2}</span>
                </p>

                <h3>{item.header}</h3>
              </div>
            </div>
          );
        })}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="carousel-chevron chevron-right"
          onClick={slideLeft}
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="carousel-chevron chevron-left"
          onClick={slideRight}
        />

        <div className="pagenation-wrapper">
            {/* to have as many dots as the slides we have in the images array */}
            {CarouselContent.map((item) => {
                return (
                    <FontAwesomeIcon key={item.id} 
                    // to change the dot color from its id
                    className={ item.id == current
                        ? "pagenation-dot pagenation-dot-active"
                        : "pagenation-dot"
                    }
                    // to track the slide id
                    onClick={() => {
                        setCurrent(item.id)
                    }}
                     icon={faCircle} />
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
