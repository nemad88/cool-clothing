import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { StyledComponents as S } from "./burger-menu.styles";

import { selectNavIsOpen } from "../../redux/shop/shop.selector";

const BurgerMenu = ({ isOpen }) => (
  <S.BurgerMenu className={isOpen ? "open" : null}>sanyi</S.BurgerMenu>
);

const mapStateToProps = createStructuredSelector({
  isOpen: selectNavIsOpen,
});

export default connect(mapStateToProps)(BurgerMenu);
