import styled, { css } from "styled-components";
import { colorPalette } from "../../main.styles";

const DEFAULT_BUTTON_STYLES = css`
  padding: 0.7rem 1rem;
  font-size: 16px;
  border-radius: 32px;
`;
export const BaseButton = styled.button`
  ${DEFAULT_BUTTON_STYLES}
`;

export const GetStartedButton = styled.button`
  ${DEFAULT_BUTTON_STYLES}
  padding: 0.7rem 1.5rem !important;
  border: 2px solid ${colorPalette.accent.accentTwo};
  background-color: ${colorPalette.accent.accentOne};

  a {
    color: ${colorPalette.accent.accentTextLight};
    text-decoration: none;
  }
`;

export const DropDownMenuButton = styled.button`
  border: 2px solid blue;
`;
export const CloseButton = styled.button`
  border: 2px solid red;
`;

export const AccordionButton = styled.button`
  border: none;
  background: transparent;
`;
