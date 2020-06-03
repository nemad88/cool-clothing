import styled from "styled-components";

export const HeaderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  @media screen and (max-width: 800px) {
    min-height: 100px;
  }
`;

export const HeaderTopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
     "logo search search search nav";
  @media screen and (max-width: 800px) {
     grid-template-areas: 
     "logo logo nav nav nav"     
     "search search search search search";
     margin-bottom: 1rem;
  }
`;
