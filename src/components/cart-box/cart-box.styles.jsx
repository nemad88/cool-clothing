import styled from "styled-components";

import { ReactComponent as CloseSVG } from "../../assets/img/close.svg";

export const CartBox = styled.div`
  width: 300px;
  height: 100vh;
  padding: 50px 10px 10px 20px;
  background: white;
  position: fixed;
  right: 0%;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  opacity: 0;
  transform: translateX(110%);

  -webkit-box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  transition: all 1s ease;
  &.opened {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const CloseIcon = styled(CloseSVG)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  z-index: 199;
  cursor: pointer;
`;

export const GoToCheckoutButton = styled.button`
  background: white;
  width: 90%;
  color: black;
  padding: 1rem;
  border: black 1px solid;
  cursor: pointer;
  font-size: 1.6rem;

  &:focus {
    outline: none;
  }

  &:hover {
    background: black;
    color: white;
  }
`;

export const ItemList = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const YourCartIsEmpty = styled.div`
  font-size: 1.6rem;
`;

export const StyledComponents = {
  CartBox,
  CloseIcon,
  GoToCheckoutButton,
  ItemList,
  YourCartIsEmpty,
};
