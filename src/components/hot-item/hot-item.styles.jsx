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

  &:hover img {
    filter: blur(1px);
  }
`;

export const HotItemTitle = styled.h2`
  color: black;
  font-size: 1.6rem;
  margin: 2rem 0 0.4rem 0;
`;

export const HotItemPrice = styled.div`
  color: black;
  font-weight: bold;
`;

export const StyledComponents = {
  HotItem,
  HotItemTitle,
  HotItemPrice
}