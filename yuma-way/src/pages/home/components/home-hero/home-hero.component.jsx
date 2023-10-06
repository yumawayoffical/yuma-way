import React from "react";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { StyledHeroSection } from "./home-hero.styles";
import { HeaderOneText, MainText } from "../../../../main.styles";

const HomeHero = () => {
  return (
    <StyledHeroSection id="hero-section">
      <div className="hero-text-container">
        <HeaderOneText>Revitalize Your Mind, Reclaim Your Happiness</HeaderOneText>
        <MainText style={{ color: "#fff" }}>
          Don't let mental health challenges hold you back. Ketamine Therapy is your key to revitalizing your mind and taking back control of your
          happiness.
        </MainText>
        <CustomButton className="get-started-btn" buttonType={BUTTON_TYPES_CLASSES.getStarted}>
          Get Started Today!
        </CustomButton>
      </div>

      <div className="hero-image-container">
        <span
          className="background-image"
          role="img"
          aria-label="Young lady with her eyes closed breathing in the fresh air around in total bliss."
        ></span>
      </div>
    </StyledHeroSection>
  );
};

export default HomeHero;
