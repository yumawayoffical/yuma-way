import styled from "styled-components";
import { device } from "../../../../main.styles";
import PLACEHOLDER_IMAGE_UPDATE_LATER from "../../../../assets/heroImagePlaceHolder.jpg";

export const StyledHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;
  padding: 1rem;
  @media ${device.laptop} {
    height: 90vh;
    padding: 2rem;
  }
  @media ${device.desktop} {
    height: 100vh;
  }

  & .hero-text-container {
    color: #fff;
    width: 100%;
    max-width: 750px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 5rem;
    padding-bottom: 2rem;

    & .get-started-btn {
      margin-top: auto;
      max-width: 300px;
    }
  }

  & .hero-image-container {
    & .background-image {
      z-index: -1000;
      position: absolute;
      inset: 0;
      background-image: url(${PLACEHOLDER_IMAGE_UPDATE_LATER});
      background-size: cover;
      background-position: center;
      opacity: 0.7;
      max-height: 100vh;
      width: 100%;
      filter: blur(1.5px);
    }
    &::before {
      content: "";
      z-index: -999;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.266), #0636468d);
      pointer-events: none;
    }
  }
`;

export const GridItemContainer = styled.div``;
