import React, { useState } from "react";
import { StyledExploreServicesSlider, StyledSliderPagination, StyledSliderPaginationContainer } from "./explore-services-slider.styles";
import { HeaderThreeText, MainText } from "../../../../main.styles";
import exploreServicesData from "./explore-services.config.json";

const ExploreServicesSlider = () => {
  // Create state to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  const { title, image, description } = exploreServicesData[currentIndex];

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <StyledExploreServicesSlider>
      <HeaderThreeText>{title}</HeaderThreeText>
      <div className="img-container">
        <img src={image} alt="" />
      </div>

      <div>
        <MainText>{description}</MainText>
      </div>
      <StyledSliderPaginationContainer>
        {exploreServicesData.map((service, index) => {
          return (
            <StyledSliderPagination activeState={currentIndex === index && true} key={index} onClick={() => goToSlide(index)}>
              <span></span>
              <small>{index + 1}</small>
            </StyledSliderPagination>
          );
        })}
      </StyledSliderPaginationContainer>
    </StyledExploreServicesSlider>
  );
};

export default ExploreServicesSlider;
