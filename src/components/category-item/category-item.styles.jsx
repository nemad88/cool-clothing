import styled from "styled-components";

export const CategoryItem = styled.div`
  position: relative;
  margin: 1rem 2rem;
  cursor: pointer;

  &:hover button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover img {
    filter: blur(1px);
  }
`;
export const CategoryItemTitle = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2rem 0;
  color: black;
`;

export const StyledComponents = {
  CategoryItem,
  CategoryItemTitle,
};
