import styled from "styled-components";

export const CartBoxItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 1rem;
`;

export const CartBoxItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartBoxItemTitle = styled.h3`
  font-size: 1.4rem;
  text-align: center;
`;

const CartBoxItemLine = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
`;

export const StyledComponents = {
  CartBoxItem,
  CartBoxItemDetails,
  CartBoxItemTitle,
  CartBoxItemLine,
};
