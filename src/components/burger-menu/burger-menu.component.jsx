import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyledComponents as S } from "./burger-menu.styles";

import { selectCategoriesAsArray } from "../../redux/shop/shop.selector";
import { selectBurgerMenuIsOpen } from "../../redux/burger/burger.selector";

import { toggleBurger } from "../../redux/burger/burger.actions";

import {} from "../../redux/burger/burger.actions";

const BurgerMenu = () => {
  const categories = useSelector(selectCategoriesAsArray);
  const burgerMenuIsOpen = useSelector(selectBurgerMenuIsOpen);

  const dispatch = useDispatch();

  const burgerMenuLinks = categories.map(({ routeName, title }) => (
    <S.MenuItem
      key={routeName}
      to={"/categories/" + routeName}
      onClick={() => dispatch(toggleBurger())}
    >
      {title}
    </S.MenuItem>
  ));

  return (
    <S.BurgerMenu className={burgerMenuIsOpen ? "open" : null}>
      {burgerMenuLinks}
    </S.BurgerMenu>
  );
};

export default BurgerMenu;
