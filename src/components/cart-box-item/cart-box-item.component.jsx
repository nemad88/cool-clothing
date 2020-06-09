import React from "react";
import { useDispatch } from "react-redux";

import { StyledComponents as S } from "./cart-box-item.styles";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";

import CustomImage from "../custom-image/custom-image.component";

const CartBoxItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <S.CartBoxItem>
      <div>
        <CustomImage customWidth="80px" imageUrl={item.imageUrl} />
      </div>
      <S.CartBoxItemDetails>
        <S.CartBoxItemTitle>{item.name}</S.CartBoxItemTitle>
        <S.QuantityBox>
          <S.MinusIcon
            onClick={() => dispatch(removeItemFromCart(item))}
          ></S.MinusIcon>
          <S.CartBoxItemLine>{item.quantity}</S.CartBoxItemLine>
          <S.PlusIcon
            onClick={() => dispatch(addItemToCart(item))}
          ></S.PlusIcon>
        </S.QuantityBox>
        <S.CartBoxItemLine>${item.price * item.quantity}</S.CartBoxItemLine>
      </S.CartBoxItemDetails>
    </S.CartBoxItem>
  );
};

export default CartBoxItem;
