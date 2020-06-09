import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItems,
  selectCartIsOpened,
} from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./cart-box.styles";

import { toggleCart } from "../../redux/cart/cart.actions";

import CartBoxItem from "../cart-box-item/cart-box-item.component";

const CartBox = () => {
  const cartItems = useSelector(selectCartItems);
  const cartIsOpened = useSelector(selectCartIsOpened);

  const dispatch = useDispatch();

  const selectedItem = cartItems.map((item) => (
    <CartBoxItem key={item.id} item={item} />
  ));

  return (
    <S.CartBox className={cartIsOpened ? "opened" : null}>
      <S.CloseIcon onClick={() => dispatch(toggleCart())}></S.CloseIcon>

      {cartItems.length > 0 ? (
        <S.GoToCheckoutButton>GO TO CHECKOUT</S.GoToCheckoutButton>
      ) : (
        <S.YourCartIsEmpty>Your cart is empty :(</S.YourCartIsEmpty>
      )}

      <S.ItemList>{selectedItem}</S.ItemList>
    </S.CartBox>
  );
};

export default CartBox;
