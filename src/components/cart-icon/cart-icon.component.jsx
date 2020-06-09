import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./cart-icon.styles";

import { toggleCart } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const cartItemsQuantity = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  return (
    <S.CartIconContainer
      onClick={() => {
        dispatch(toggleCart());
      }}
    >
      <S.CartIcon></S.CartIcon>
      <span>{cartItemsQuantity}</span>
    </S.CartIconContainer>
  );
};

export default CartIcon;
