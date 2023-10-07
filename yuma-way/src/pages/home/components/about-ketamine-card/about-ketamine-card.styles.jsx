import styled from "styled-components";
import { LINK_HOVER, boxShadows, device } from "../../../../main.styles";

export const StyledAboutKetamineCard = styled.div`
  height: 300px;
  width: 350px;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  box-shadow: ${boxShadows.boxShadowBase};

  margin-inline: auto;
  @media ${device.tablet} {
  }

  & .card-list {
    margin-block: 1rem;
  }
  & .card-link-cta {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    padding: 0.8rem;
    background-color: #6eb995;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0 0 12px 12px;
    p {
      margin-left: 1rem;
      ${LINK_HOVER}
    }
  }
`;
