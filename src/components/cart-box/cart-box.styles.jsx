import styled from "styled-components";

import { ReactComponent as CloseSVG } from "../../assets/img/close.svg";

// CART BOX STYLE

export const CartBox = styled.div`
  color: black;
  width: 300px;
  height: 100vh;
  position: fixed;
  /* background: #ffa27a; */
  background: white;
  right: 0%;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transform: translateX(105%);

  -webkit-box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  box-shadow: 3px 3px 19px 1px rgba(0, 0, 0, 0.36);
  transition: all 1s ease;
  &.opened {
    transform: translateX(0%);
    opacity: 1;
  }
`;

// ICONS

export const CloseIcon = styled(CloseSVG)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  z-index: 199;
  cursor: pointer;
`;

// LIST

export const ItemList = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;

  flex-direction: column;
  overflow: auto;
`;

// CART CHECKOUT BOX

export const CartCheckoutBox = styled.div`
  display: flex;
  height: 15vh;
  flex-direction: column;
  width: 100%;
  background: #0fceac;
  padding: 8rem 2rem 5rem 2rem;
  justify-content: center;
  align-items: center;
`;

export const GoToCheckoutButton = styled.div`
  cursor: pointer;
  background: white;
  color: black;
  border: black 1px solid;
  font-size: 1.6rem;
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background: black;
    color: white;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  font-size: 1.4rem;
  min-height: 5vh;
  font-weight: bold;
`;

// EMPTY CART

export const YourCartIsEmpty = styled.div`
  font-size: 1.6rem;
`;

// EXPORT

export const StyledComponents = {
  CartBox,
  CloseIcon,
  GoToCheckoutButton,
  ItemList,
  YourCartIsEmpty,
  CartTotal,
  CartCheckoutBox,
};
