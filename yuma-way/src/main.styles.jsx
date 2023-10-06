import styled, { css } from "styled-components";

// Sizes for breakpoint, fonts, etc
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

const paragraphFontSizes = {
  small: "14px",
  medium: "16px",
  large: "18px",
  xLarge: "20px",
};

const h1fontSizes = {
  small: "36px",
  medium: "48px",
  large: "60px",
  xLarge: "72px",
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

export const MainText = styled.p`
  font-family: "Archivo", sans-serif;
  font-size: ${paragraphFontSizes.small}; // Default font size

  @media ${device.tablet} {
    font-size: ${paragraphFontSizes.medium};
  }

  @media ${device.desktop} {
    font-size: ${paragraphFontSizes.large};
  }

  @media ${device.desktopLarge} {
    font-size: ${paragraphFontSizes.xLarge};
  }
`;

export const HeaderOneText = styled.h1`
  font-size: ${h1fontSizes.small};
  line-height: 40px;
  font-family: "Poppins", sans-serif;

  @media ${device.tablet} {
    font-size: ${h1fontSizes.medium};
    line-height: 52px;
  }

  @media ${device.desktop} {
    font-size: ${h1fontSizes.large};
    line-height: 64px;
  }

  @media ${device.desktopLarge} {
    font-size: ${h1fontSizes.xLarge};
    line-height: 76px;
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

// Spacing
