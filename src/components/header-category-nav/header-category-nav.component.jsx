import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { NavListStyled, NavListLinkStyled } from "./header-category-nav.styles";

import { selectCategoriesAsArray } from "../../redux/shop/shop.selector";

const HeaderCategoryNav = ({ categories }) => (
  <NavListStyled>
    {categories.map(({ routeName, title }) => (
      <li key={routeName}>
        <NavListLinkStyled to={process.env.PUBLIC_URL + "/" + routeName}>
          {title}
        </NavListLinkStyled>
      </li>
    ))}
  </NavListStyled>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesAsArray,
});

export default connect(mapStateToProps)(HeaderCategoryNav);
