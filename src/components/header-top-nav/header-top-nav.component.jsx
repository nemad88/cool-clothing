import React from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../burger-icon/burger-icon.component";
import { StyledComponents as S } from "./header-top-nav.styles";

const HeaderTopNav = () => (
  <S.HeaderTopNav>
    <S.FavoritesIcon />
    <Link to="/person">
      <S.PersonIcon />
    </Link>
    <S.CartIcon />
    <BurgerIcon />
  </S.HeaderTopNav>
);

export default HeaderTopNav;
