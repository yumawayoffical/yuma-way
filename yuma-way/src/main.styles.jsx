import styled, { css } from "styled-components";

const size = {
  mobile: "20rem", //320px
  tablet: "30rem", //480px
  laptop: "48rem", //768px
  desktop: "64rem", //1024px
  desktopLarge: "76rem", //1216px
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
};

// Global styled components
export const StyledPageContainer = styled.div`
  min-height: 100vh;
  max-width: 1400px; // change based on client request
  padding: 1rem;
  @media ${device.tablet} {
    padding: 2rem;
  }
  @media ${device.desktop} {
    padding: 2.5rem;
  }
`;

// Global styled css

export const GRID_CENTER_ITEM = css`
  display: grid;
  place-items: center;
`;

export const FLEX_ALIGN_ITEM_CENTER = css`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
