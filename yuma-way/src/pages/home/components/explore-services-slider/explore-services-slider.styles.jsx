import styled from "styled-components";
import { FLEX_ALIGN_ITEM_CENTER, GRID_CENTER_ITEM, colorPalette } from "../../../../main.styles";

export const StyledExploreServicesSlider = styled.div`
  min-height: 425px;
  display: flex;
  flex-direction: column;

  & .img-container {
    min-height: 200px;
    margin-bottom: 1rem;
    ${GRID_CENTER_ITEM}
  }
`;

export const StyledSliderPaginationContainer = styled.div`
  margin-top: auto;
  display: flex;
  ${FLEX_ALIGN_ITEM_CENTER}
  justify-content : center;
`;

export const StyledSliderPagination = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding-inline: 1rem; */
  span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ activeState }) => `${activeState ? `${colorPalette.accent.accentOne}` : `${colorPalette.accent.accentTextLight}`}`};
    margin-bottom: 0.5rem;
  }
  small {
    color: ${({ activeState }) => `${activeState ? `${colorPalette.accent.accentOne}` : `${colorPalette.accent.accentTextLight}`}`};
    font-weight: bold;
  }
`;
