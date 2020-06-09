import React from "react";
import { connect } from "react-redux";

import CustomImage from "../custom-image/custom-image.component";
import JumpButton from "../custom-image-button/custom-image-button.component";

import { StyledComponents as S } from "./hot-item.styles";

import { addItemToCart } from "../../redux/cart/cart.actions";

const HotItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <S.HotItem
      onClick={() => {
        addItem(item);
      }}
    >
      <div>
        <CustomImage imageUrl={imageUrl} customWidth="20rem" />
        <S.HotItemTitle>{name}</S.HotItemTitle>
        <S.HotItemPrice>${price}</S.HotItemPrice>
        <JumpButton>ADD TO CART</JumpButton>
      </div>
    </S.HotItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(HotItem);
