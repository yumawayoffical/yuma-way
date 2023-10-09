import styled from "styled-components";
import { device } from "../../../../main.styles";

export const StyledAboutKetamineSection = styled.section`
  min-height: 100vh;
`;

export const StyledAboutKetamineCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin-top: 1.5rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
