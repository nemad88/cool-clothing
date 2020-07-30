import styled from 'styled-components';

const SearchResultItem = styled.li`
  display: flex;
  margin: 2rem;
`;
const SearchResultItemDetails = styled.div`
  display: flex;
  flex: 4 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;

const SearchResultItemTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

const SearchResultItemPrice = styled.h4`
  text-align: center;
  font-size: 1rem;
  margin: 1rem;
`;

const SearchResultItemButton = styled.button`
  background: black;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 0.8rem;
`;

export const StyledComponents = {
  SearchResultItem,
  SearchResultItemTitle,
  SearchResultItemDetails,
  SearchResultItemPrice,
  SearchResultItemButton,
};
