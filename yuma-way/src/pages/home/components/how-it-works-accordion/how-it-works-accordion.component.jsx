import React from "react";
import { StyledAccordion } from "./how-it-works-accordion.styles";
import howItWorksAccordionData from "./how-it-works.config.json";
import HowItWorksAccordionCard from "../how-it-works-accordion-card/how-it-works-accordion-card.component";
const HowItWorksAccordion = () => {
  return (
    <StyledAccordion>
      {howItWorksAccordionData.map((cardData, index) => {
        return <HowItWorksAccordionCard key={index} cardData={cardData} />;
      })}
    </StyledAccordion>
  );
};

export default HowItWorksAccordion;
