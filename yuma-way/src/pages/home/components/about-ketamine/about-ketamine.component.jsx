import React from "react";
import { StyledAboutKetamineContainer, StyledAboutKetamineSection } from "./about-ketamine.styles";
import { HeaderTwoText } from "../../../../main.styles";

const AboutKetamine = () => {
  return (
    <StyledAboutKetamineSection id="about-ketamine-section">
      <HeaderTwoText>Why choose ketamine?</HeaderTwoText>

      <StyledAboutKetamineContainer>About ketamine component</StyledAboutKetamineContainer>
    </StyledAboutKetamineSection>
  );
};

export default AboutKetamine;
