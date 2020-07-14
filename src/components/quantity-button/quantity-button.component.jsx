import React from "react";

import { useDispatch } from "react-redux";

import { StyledComponents as S } from "./quantity-button.styles";

import {
  addItemToCart,
  removeItemFromCart,
  removeAllFromAnItem,
} from "../../redux/cart/cart.actions";

const QuantityButton = ({ item, change }) => {
  const dispatch = useDispatch();

  switch (change) {
    case "plus":
      return (
        <S.PlusIcon onClick={() => dispatch(addItemToCart(item))}></S.PlusIcon>
      );
    case "minus":
      return (
        <S.MinusIcon
          onClick={() => dispatch(removeItemFromCart(item))}
        ></S.MinusIcon>
      );
    case "empty":
      return (
        <S.TrashbinIcon
          onClick={() => dispatch(removeAllFromAnItem(item))}
        ></S.TrashbinIcon>
      );
    default:
      return {};
  }
};

export default QuantityButton;
