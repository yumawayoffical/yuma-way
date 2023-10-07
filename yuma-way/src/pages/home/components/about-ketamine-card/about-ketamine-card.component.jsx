import React from "react";
import { StyledAboutKetamineCard } from "./about-ketamine-card.styles";
import { Link } from "react-router-dom";
import { HeaderThreeText, MainText } from "../../../../main.styles";
import { AiOutlineArrowRight } from "react-icons/ai";
const AboutKetamineCard = ({ data }) => {
  const { title, subtopics } = data;

  return (
    <StyledAboutKetamineCard>
      <HeaderThreeText>{title}</HeaderThreeText>

      <ul className="card-list">
        {subtopics.map((subtopic, index) => {
          return (
            <li key={index}>
              <MainText>{subtopic.title}</MainText>
            </li>
          );
        })}
      </ul>

      <Link className="card-link-cta" to="/science-and-safety">
        <p>Learn More</p>
        <AiOutlineArrowRight />
      </Link>
    </StyledAboutKetamineCard>
  );
};

export default AboutKetamineCard;
