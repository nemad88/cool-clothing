import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import BurgerIcon from "../burger-icon/burger-icon.component";
import { StyledComponents as S } from "./header-top-nav.styles";
import CartIcon from "../cart-icon/cart-icon.component";
import BurgerMenu from "../burger-menu/burger-menu.component";

import { auth } from "../../firebase/firebase.utils";

import { selectCurrentDisplayName } from "../../redux/user/user.selector";

const HeaderTopNav = () => {
  const user = useSelector(selectCurrentDisplayName);

  return (
    <S.HeaderTopNav>
      <CartIcon />
      {user ? (
        <S.Logout onClick={() => auth.signOut()}>logout</S.Logout>
      ) : (
        <Link to="/signin">
          <S.PersonIcon />
        </Link>
      )}
      <BurgerIcon />
      <BurgerMenu />
    </S.HeaderTopNav>
  );
};

export default HeaderTopNav;
