import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CategoriesOverviewContainer } from "./categories-overview.styles";
import { selectCategoryNames } from "../../redux/shop/shop.selector";

const CategoriesOverview = ({ categories }) => {
  const categoriesList = categories.map((category) => {
    return <h1>{category}</h1>;
  });

  return (
    <CategoriesOverviewContainer>{categoriesList}</CategoriesOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoryNames,
});

export default connect(mapStateToProps)(CategoriesOverview);
