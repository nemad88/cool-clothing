import React from "react";

import { BurgerStyled, BurgerSpanStyled } from "./header-burger.styles";

const Burger = () => (
  <BurgerStyled>
    <BurgerSpanStyled className="line1" />
    <BurgerSpanStyled className="line2" />
    <BurgerSpanStyled className="line3" />
  </BurgerStyled>
);

export default Burger;
