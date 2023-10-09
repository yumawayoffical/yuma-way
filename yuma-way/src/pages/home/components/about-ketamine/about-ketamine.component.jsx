import React from "react";
import { StyledAboutKetamineCardContainer, StyledAboutKetamineSection } from "./about-ketamine.styles";
import { HeaderTwoText, MainText, StyledSpacing } from "../../../../main.styles";
import aboutKetamineData from "./about-ketamine.config.json";
import AboutKetamineCard from "../about-ketamine-card/about-ketamine-card.component";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { Link } from "react-router-dom";
const AboutKetamine = () => {
  return (
    <StyledAboutKetamineSection id="about-ketamine-section">
      <HeaderTwoText>Why choose ketamine?</HeaderTwoText>
      <MainText>
        We understand that the path to mental wellness is unique for each individual. Traditional treatments don't always provide the relief and
        breakthroughs needed to overcome the challenges of depression, anxiety, and other mental health conditions. This is where psychedelic-assisted
        therapy with ketamine can make a profound difference.
      </MainText>
      <StyledSpacing size={64} />
      <StyledAboutKetamineCardContainer>
        {aboutKetamineData.map((data, index) => {
          return <AboutKetamineCard data={data} key={index} />;
        })}
      </StyledAboutKetamineCardContainer>
      <CustomButton buttonType={BUTTON_TYPES_CLASSES.getStarted} style={{ marginTop: "2rem" }}>
        <Link to="/get-started">Get Started Today!</Link>
      </CustomButton>
    </StyledAboutKetamineSection>
  );
};

export default AboutKetamine;
