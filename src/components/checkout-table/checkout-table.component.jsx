import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./checkout-table.styles";

import CustomImage from "../custom-image/custom-image.component";
import QuantityButton from "../quantity-button/quantity-button.component";

const ChecoutTable = () => {
  const cartItems = useSelector(selectCartItems);

  const renderedCartItems = cartItems.map((item) => {
    return (
      <S.TableRow key={item.name}>
        <S.Cell customWidth="20%">
          <CustomImage
            customWidth={"100%"}
            imageUrl={item.imageUrl}
          ></CustomImage>
        </S.Cell>
        <S.Cell customWidth="30%">{item.name}</S.Cell>
        <S.Cell customWidth="20%">
          <QuantityButton item={item} change={"minus"} />
          {item.quantity}
          <QuantityButton item={item} change={"plus"} />
        </S.Cell>
        <S.Cell customWidth="15%">${item.quantity * item.price}</S.Cell>
        <S.Cell customWidth="15%">
          <QuantityButton item={item} change={"empty"} />
        </S.Cell>
      </S.TableRow>
    );
  });

  return (
    <S.Table>
      <S.TableRow>
        <S.TableHead customWidth="20%">Product</S.TableHead>
        <S.TableHead customWidth="30%">Name</S.TableHead>
        <S.TableHead customWidth="20%">Quantity</S.TableHead>
        <S.TableHead customWidth="15%">Price</S.TableHead>
        <S.TableHead customWidth="15%">Remove</S.TableHead>
      </S.TableRow>
      {renderedCartItems}
    </S.Table>
  );
};

export default ChecoutTable;
