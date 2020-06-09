import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../burger-icon/burger-icon.component";
import { StyledComponents as S } from "./header-top-nav.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import BurgerMenu from "../burger-menu/burger-menu.component";

const HeaderTopNav = () => {
  return (
    <S.HeaderTopNav>
      <S.FavoritesIcon />
      <Link to="/person">
        <S.PersonIcon />
      </Link>
      <CartIcon />
      <BurgerIcon />
      <BurgerMenu />
    </S.HeaderTopNav>
  );
};

export default HeaderTopNav;
