import styled from "styled-components";

export const StyledAccordionCard = styled.div`
  min-height: 85px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  border-bottom: 2px solid gray;
  max-width: 750px;
  margin: auto;
  & .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  & .card-body {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
