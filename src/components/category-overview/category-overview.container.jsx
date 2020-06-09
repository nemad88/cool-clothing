import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { selectIsCategoriesFetching } from "../../redux/shop/shop.selector";

import CategoryOverviewComponent from "./category-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCategoriesFetching,
});

const CategoryOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryOverviewComponent);

export default CategoryOverviewContainer;
