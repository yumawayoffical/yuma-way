import React from "react";
import { HeaderTwoText, MainText, StyledSpacing } from "../../../../main.styles";
import { StyledExploreServicesSection } from "./explore-our-services.styles";
import ExploreServicesSlider from "../explore-services-slider/explore-services-slider.components";

const ExploreOurServices = () => {
  return (
    <StyledExploreServicesSection id="explore-our-services-section">
      <HeaderTwoText>Explore our services</HeaderTwoText>
      <MainText>
        Embark on a journey of self-discovery and healing with Tripped Advisors. Whether you're seeking relief from depression, anxiety, or a desire
        for personal growth, our team is here to guide you every step of the way. You're not alone; we're here to help you rediscover your inner
        strength and live life to its fullest potential.
      </MainText>
      <MainText style={{ marginTop: "1rem" }}>
        Contact us today to learn more about our services and how we can support you on your path to better mental health through psychedelic ketamine
        therapy.
      </MainText>
      <StyledSpacing size={64} />
      <ExploreServicesSlider />
    </StyledExploreServicesSection>
  );
};

export default ExploreOurServices;
