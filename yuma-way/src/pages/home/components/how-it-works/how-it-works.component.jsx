import React from "react";
import { StyledHowItWorksContainer, StyledHowItWorksSection } from "./how-it-works.styles";
import { HeaderTwoText } from "../../../../main.styles";

const HowItWorks = () => {
  return (
    <StyledHowItWorksSection id="how-it-works-section">
      <HeaderTwoText>How it works</HeaderTwoText>
      <StyledHowItWorksContainer>How it works component</StyledHowItWorksContainer>
    </StyledHowItWorksSection>
  );
};

export default HowItWorks;
