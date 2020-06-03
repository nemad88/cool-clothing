import React from "react";
import { Link } from "react-router-dom";
import Burger from "../header-burger/header-burger.component";
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
    <Burger/>

  </HeaderNavContainer>
);

export default HeaderNav;
