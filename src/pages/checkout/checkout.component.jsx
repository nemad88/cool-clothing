import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

import SectionTitle from "../../components/section-title/section-title.components";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import YourCartIsEmpty from "../../components/your-cart-is-empty/your-cart-is-empty.component";
import CartBox from "../../components/cart-box/cart-box.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import { StyledComponents as S } from "./checkout.styles";

const Checkout = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <S.CheckoutPage>
      <CartBox />
      {cartItems.length > 0 ? (
        <>
          <SectionTitle>Checkout</SectionTitle>
          <CheckoutTable />
          <S.ButtonBox>
            <CustomButton customWidth="150px">Pay ${cartTotal} </CustomButton>
          </S.ButtonBox>
        </>
      ) : (
        <YourCartIsEmpty />
      )}

      {/* <SectionTitle>Checkout</SectionTitle>
      {cartItems.length > 0 ? <CheckoutTable /> : <YourCartIsEmpty />}

      <S.ButtonBox>
        <CustomButton customWidth="150px">Pay ${cartTotal} </CustomButton>
      </S.ButtonBox> */}
    </S.CheckoutPage>
  );
};

export default Checkout;
