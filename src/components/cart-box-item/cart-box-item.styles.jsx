import styled, { css } from "styled-components";
import { ReactComponent as Minus } from "../../assets/img/minus-filled.svg";
import { ReactComponent as Plus } from "../../assets/img/plus-filled.svg";

const iconMixin = css`
  width: 30px;
`;

export const CartBoxItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin-top: 10px;
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
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem;
`;

const QuantityBox = styled.div`
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
`;

export const MinusIcon = styled(Minus)`
  ${iconMixin}
`;

export const PlusIcon = styled(Plus)`
  ${iconMixin}
`;

export const StyledComponents = {
  CartBoxItem,
  CartBoxItemDetails,
  CartBoxItemTitle,
  CartBoxItemLine,
  MinusIcon,
  PlusIcon,
  QuantityBox,
};
