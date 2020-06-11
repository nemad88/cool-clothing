import React, { useLayoutEffect } from "react";

import SectionTitle from "../../components/section-title/section-title.components";
import Footer from "../../components/footer/footer.component";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";

import { StyledComponents as S } from "./checkout.styles";

const Checkout = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.CheckoutPage>
      <SectionTitle>Checkout</SectionTitle>
      <CheckoutTable />
      <Footer />
    </S.CheckoutPage>
  );
};

export default Checkout;
