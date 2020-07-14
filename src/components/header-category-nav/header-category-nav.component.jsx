import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { StyledComponents as S } from "./header-category-nav.styles";

import { selectCategoriesAsArray } from "../../redux/shop/shop.selector";
import { selectCartIsOpened } from "../../redux/cart/cart.selector";

import { toggleCart } from "../../redux/cart/cart.actions";

const HeaderCategoryNav = ({ categories }) => {
  const dispatch = useDispatch();
  const cartIsOpened = useSelector(selectCartIsOpened);

  const handleChangeCategory = () => {
    if (cartIsOpened) {
      dispatch(toggleCart());
    }
  };

  return (
    <S.NavList>
      {categories.map(({ routeName, title }) => (
        <li key={routeName}>
          <S.NavListLink
            onClick={handleChangeCategory}
            to={"/categories/" + routeName}
          >
            {title}
          </S.NavListLink>
        </li>
      ))}
    </S.NavList>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesAsArray,
});

export default connect(mapStateToProps)(HeaderCategoryNav);
