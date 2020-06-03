import styled from "styled-components";

export const SearchResultBox = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  max-height: 70vh;
  background: rgba(245, 245, 245, 0.95);
  z-index: 97;
  padding: 15px;
  justify-content: space-between;
  overflow: auto;
`;

export const SearchResultBoxTitle = styled.h3`
  color: green;
  font-size: 2.4rem;
  margin-bottom: 0.75rem;
`;

export const SearchResultList = styled.ul`
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const StyledComponents = {
  SearchResultBox,
  SearchResultBoxTitle,
  SearchResultList,
};
