import React from "react";

import { StyledComponents as S } from "./your-cart-is-empty.styles";

const YourCartIsEmpty = () => {
  return (
    <S.YourCartIsEmptyContianer>
      <S.SadSmile />
      <h1>Your Cart is Empty</h1>
    </S.YourCartIsEmptyContianer>
  );
};

export default YourCartIsEmpty;
