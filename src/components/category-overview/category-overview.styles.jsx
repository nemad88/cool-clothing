import styled from "styled-components";

export const CategoryOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
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
  cursor: pointer;

  margin: 2rem;

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
    margin: 0.5rem;

    &:hover img {
      filter: blur(0px);
    }
  }
`;

export const Title = styled.div`
  color: black;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  margin: 2rem 0 0.5rem 0;
  color: black;
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
