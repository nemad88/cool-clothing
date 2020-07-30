import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { selectIsCategoriesFetching } from '../../redux/shop/shop.selector';

import CategoriesSection from './categories-section.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCategoriesFetching,
});

const CategoriesSectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoriesSection);

export default CategoriesSectionContainer;
