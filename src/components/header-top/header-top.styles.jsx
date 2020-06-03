import styled from "styled-components";

export const HeaderTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "logo search search search nav";
  @media screen and (max-width: 800px) {
    grid-template-areas:
      "logo logo nav nav nav"
      "search search search search search";
    margin-bottom: 1rem;
  }
`;

export const StyledComponents = {
  HeaderTop,
};
