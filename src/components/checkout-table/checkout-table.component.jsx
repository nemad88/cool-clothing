import React from "react";
import { useSelector } from "react-redux";

import CustomImage from "../custom-image/custom-image.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./checkout-table.styles";

const ChecoutTable = () => {
  const cartItems = useSelector(selectCartItems);

  const renderedCartItems = cartItems.map((item) => {
    return (
      <S.TableRow>
        <S.TableColumn customWidth="20%">
          <CustomImage
            customWidth={"100%"}
            imageUrl={item.imageUrl}
          ></CustomImage>
        </S.TableColumn>
        <S.TableColumn customWidth="30%">{item.name}</S.TableColumn>
        <S.TableColumn customWidth="20%">- {item.quantity} +</S.TableColumn>
        <S.TableColumn customWidth="15%">
          {item.quantity * item.price}
        </S.TableColumn>
        <S.TableColumn customWidth="15%">X</S.TableColumn>
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
