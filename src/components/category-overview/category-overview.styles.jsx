import styled from "styled-components";

export const CategoryOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  img {
    transition: all 1s ease-out;
  }

  &:hover img {
    filter: blur(2px);
  }

  &:hover button {
    display: block;
  }

  @media screen and (max-width: 800px) {
    &:hover img {
      filter: blur(0px);
    }
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
