import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";

import CategoriesOverviewComponent from "./categories-section.component";

import { selectIsCategoriesFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCategoriesFetching,
});

const CategoriesOverview = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoriesOverviewComponent);

export default CategoriesOverview;
