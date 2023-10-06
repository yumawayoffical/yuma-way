import { createGlobalStyle, styled } from "styled-components";
import { FLEX_ALIGN_ITEM_CENTER, GRID_CENTER_ITEM, LINK_HOVER, colorPalette } from "../../main.styles";
import { device } from "../../main.styles";

export const StyledNavigation = styled.nav`
  width: 100%;
  min-height: 95px;
  padding: 1rem 2rem;
  background-color: ${colorPalette.secondary.secondaryOne};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .logo {
    height: 55px;
    width: 55px;
    background-color: red;
    border-radius: 50%;
    /* update later if needed */
    ${GRID_CENTER_ITEM}
  }
  & .link-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & .link-item {
      text-decoration: none;
    }
  }
`;
export const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto 0 auto;
  gap: 2rem;

  & .link-item {
    ${LINK_HOVER}
  }

  & .link-list-item {
    list-style: none;
    color: #fff; // update later if needed
    border-bottom: 2px solid #fff;
    padding-bottom: 1rem;
    font-size: 26px;

    @media ${device.desktop} {
      flex-direction: row;
      border-bottom: none;
      padding-bottom: 0;
      font-size: 20px;
    }
  }

  @media ${device.desktop} {
    ${FLEX_ALIGN_ITEM_CENTER}
    gap: 2rem;
    margin: 0;
    max-width: 700px;
  }
`;

// Global style for drop down menu to prevent scroll while open
export const GlobalStyle = createGlobalStyle`
  body, html {
    overflow: hidden;
  }
`;
export const StyledNavigationMobileMenu = styled.div`
  position: fixed;
  overflow: hidden;
  inset: 0;
  max-height: 100vh;
  width: 100vw;
  background-color: #222020b5;
  z-index: 1000;
  padding: 2rem;
  &:before {
    content: "";
    backdrop-filter: blur(5px);
    background-color: #444242;
    position: fixed;
    overflow: hidden;
    inset: 0;
    z-index: -1000;
  }
`;
