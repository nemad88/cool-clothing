import React from 'react';

import { StyledComponents as S } from './cart-box-item.styles';

import CustomImage from '../custom-image/custom-image.component';
import QuantityButton from '../quantity-button/quantity-button.component';

const CartBoxItem = ({ item }) => {
  return (
    <S.CartBoxItem>
      <CustomImage customWidth="80px" imageUrl={item.imageUrl} />
      <S.CartBoxItemDetails>
        <S.CartBoxItemTitle>{item.name}</S.CartBoxItemTitle>
        <S.CartBoxItemLine>
          <QuantityButton item={item} change={'minus'} />
          {item.quantity}
          <QuantityButton item={item} change={'plus'} />
        </S.CartBoxItemLine>

        <S.CartBoxItemLine>${item.price * item.quantity}</S.CartBoxItemLine>
      </S.CartBoxItemDetails>
    </S.CartBoxItem>
  );
};

export default CartBoxItem;
