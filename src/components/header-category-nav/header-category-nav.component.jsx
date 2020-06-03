import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { StyledComponents as S } from "./header-category-nav.styles";

import { selectCategoriesAsArray } from "../../redux/shop/shop.selector";

const HeaderCategoryNav = ({ categories }) => (
  <S.NavList>
    {categories.map(({ routeName, title }) => (
      <li key={routeName}>
        <S.NavListLink to={process.env.PUBLIC_URL + "/" + routeName}>
          {title}
        </S.NavListLink>
      </li>
    ))}
  </S.NavList>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesAsArray,
});

export default connect(mapStateToProps)(HeaderCategoryNav);
