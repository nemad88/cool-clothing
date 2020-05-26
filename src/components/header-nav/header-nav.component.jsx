import React from "react";
import { Link } from "react-router-dom";

import {
  FavoritesIconStyled,
  PersonIconStyled,
  ShopBagIconStyled,
  HeaderNavContainer,
} from "./header-nav.styles";

const HeaderNav = () => (
  <HeaderNavContainer>
    <FavoritesIconStyled />
    <Link to="/person">
      <PersonIconStyled />
    </Link>

    <ShopBagIconStyled />
  </HeaderNavContainer>
);

export default HeaderNav;
