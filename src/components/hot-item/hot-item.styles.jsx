import styled from "styled-components";

export const HotItem = styled.div`
  position: relative;
  max-width: 30rem;
  margin: 1rem;
  cursor: pointer;
  text-align: center;

  &:hover button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    transition: all 1s ease-out;
  }

  &:hover img {
    filter: blur(2px);
  }

  &:active button {
    background: white;
    color: black;
  }

  @media screen and (max-width: 800px) {
    &:hover img {
      filter: blur(0px);
    }
  }
`;

export const HotItemTitle = styled.h2`
  color: black;
  font-size: 1.6rem;
  text-align: center;
  font-weight: bold;
  margin: 2rem 0 0.5rem 0;
  color: black;
`;

export const HotItemPrice = styled.div`
  color: black;
  font-weight: bold;
`;

export const StyledComponents = {
  HotItem,
  HotItemTitle,
  HotItemPrice,
};
