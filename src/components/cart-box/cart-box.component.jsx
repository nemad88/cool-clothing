import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  selectCartItems,
  selectCartIsOpened,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./cart-box.styles";

import { toggleCart } from "../../redux/cart/cart.actions";

import CartBoxItem from "../cart-box-item/cart-box-item.component";

const CartBox = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const cartIsOpened = useSelector(selectCartIsOpened);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  const selectedItem = cartItems.map((item) => (
    <CartBoxItem key={item.id} item={item} />
  ));

  return (
    <S.CartBox className={cartIsOpened ? "opened" : null}>
      <S.CloseIcon onClick={() => dispatch(toggleCart())}></S.CloseIcon>
      {cartItems.length > 0 ? (
        <>
          <S.CartCheckoutBox>
            <S.GoToCheckoutButton
              onClick={() => {
                history.push("/checkout");
                dispatch(toggleCart());
              }}
            >
              GO TO CHECKOUT
            </S.GoToCheckoutButton>
          </S.CartCheckoutBox>

          <S.ItemList>{selectedItem}</S.ItemList>
          <S.CartTotal>Total: ${cartTotal}</S.CartTotal>
        </>
      ) : (
        <S.YourCartIsEmpty>Your cart is empty </S.YourCartIsEmpty>
      )}
    </S.CartBox>
  );
};

export default withRouter(CartBox);

// {cartItems.length > 0 ? (
//   <S.GoToCheckoutButton
//     onClick={() => {
//       history.push("/checkout");
//       dispatch(toggleCart());
//     }}
//   >
//     GO TO CHECKOUT
//   </S.GoToCheckoutButton>
// ) : (
//   <S.YourCartIsEmpty>Your cart is empty :(</S.YourCartIsEmpty>
// )}
// <S.CartTotal>Total: ${cartTotal}</S.CartTotal>
