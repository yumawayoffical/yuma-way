import { createGlobalStyle, styled } from "styled-components";
import { FLEX_ALIGN_ITEM_CENTER, GRID_CENTER_ITEM } from "../../main.styles";
import { device } from "../../main.styles";

export const StyledNavigation = styled.nav`
  width: 100%;
  min-height: 75px;
  padding: 1rem 2rem;
  background-color: lightgray;
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
    gap: 1rem;
  }
`;
export const StyledNavigationList = styled.ul`
  & .link-item {
    text-decoration: none;
  }
  & .link-list-item {
    list-style: none;
    color: #000; // update later if needed
  }

  @media ${device.desktop} {
    ${FLEX_ALIGN_ITEM_CENTER}
    gap: 2rem;
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
    background-color: #fff;
    position: fixed;
    overflow: hidden;
    inset: 0;
    z-index: -1000;
  }
`;
