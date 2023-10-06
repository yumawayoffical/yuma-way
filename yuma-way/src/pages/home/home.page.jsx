import React from "react";
import { StyledPageContainer } from "../../main.styles";
import HomeHero from "./components/home-hero/home-hero.component";

const HomePage = () => {
  return (
    <StyledPageContainer style={{ position: "relative" }} id="home-page">
      <HomeHero />
    </StyledPageContainer>
  );
};

export default HomePage;
