import React from "react";
import { StyledHowItWorksSection } from "./how-it-works.styles";
import { HeaderTwoText, MainText } from "../../../../main.styles";
import HowItWorksAccordion from "../how-it-works-accordion/how-it-works-accordion.component";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";

const HowItWorks = () => {
  return (
    <StyledHowItWorksSection id="how-it-works-section">
      <HeaderTwoText>How it works</HeaderTwoText>
      <MainText className="how-it-works-text">
        At Tripped Advisors, we understand that the prospect of a psychedelic experience can be both exciting and daunting. We're here to assure you
        that your journey with us will be safe, supported, and transformative. Here's how we assist you in navigating this unique path towards better
        health:
      </MainText>
      <HowItWorksAccordion />
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.getStarted} style={{ marginTop: "2rem" }}>
        Get Started Today!
      </CustomButton>
    </StyledHowItWorksSection>
  );
};

export default HowItWorks;
