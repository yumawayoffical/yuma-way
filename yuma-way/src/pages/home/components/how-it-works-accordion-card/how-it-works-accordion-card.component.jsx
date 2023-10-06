import React, { useState } from "react";
import { StyledAccordionCard } from "./how-it-works-accordion-card.styles";
import CustomButton, { BUTTON_TYPES_CLASSES } from "../../../../components/button/button.component";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineArrowRight } from "react-icons/ai";
import { HeaderThreeText, MainText } from "../../../../main.styles";
import { Link } from "react-router-dom";

const HowItWorksAccordionCard = ({ cardData }) => {
  const { title, description, urlLink } = cardData;

  const [isActive, setIsActive] = useState(false);

  const handleAccordionClickEvent = () => {
    setIsActive(!isActive);
  };
  return (
    <StyledAccordionCard>
      <div className="card-header">
        <HeaderThreeText>{title}</HeaderThreeText>
        <CustomButton buttonType={BUTTON_TYPES_CLASSES.accordion} onClick={handleAccordionClickEvent}>
          {isActive ? <AiOutlineMinus fontSize={24} /> : <AiOutlinePlus fontSize={24} />}
        </CustomButton>
      </div>
      {isActive && (
        <div className="card-body">
          <MainText>{description}</MainText>
          {urlLink && <Link to={urlLink}>Learn More</Link>}
        </div>
      )}
    </StyledAccordionCard>
  );
};

export default HowItWorksAccordionCard;
