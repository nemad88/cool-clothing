import styled from "styled-components";

export const CategoryOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0rem;
  margin-top: 150px;

  @media screen and (max-width: 800px) {
    margin-top: 80px;
  }
`;

export const CategoryItemsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1rem;

  &:hover button {
    display: block;
  }
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 1.4rem;
`;

export const StyledComponents = {
  CategoryOverview,
  CategoryItemsList,
  ProductItem,
  Title,
  Price,
};
