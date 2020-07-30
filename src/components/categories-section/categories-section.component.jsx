import React from 'react';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCategoriesAsArray,
  selectIsCategoriesFetching,
} from '../../redux/shop/shop.selector';

import { StyledComponents as S } from './categories-section.styles';

import CategoryItem from '../category-item/category-item.component';
import SectionTitle from '../section-title/section-title.components';
import { ClipLoader } from 'react-spinners';

const CategoriesSection = () => {
  const isLoading = useSelector(selectIsCategoriesFetching);
  const categories = useSelector(selectCategoriesAsArray);
  const categoryItems = () =>
    categories.map((category) => {
      const max = category.items.length - 1;
      const random = Math.ceil(Math.random() * (max - 0) + 0);
      const actualItem = category.items[random];
      return (
        <CategoryItem
          key={category.title}
          title={category.title}
          imageUrl={actualItem.imageUrl}
          routeName={category.routeName}
        />
      );
    });

  return (
    <S.CategoriesSection>
      {isLoading ? (
        <ClipLoader size={150} color={'#0fceac'} loading={isLoading} />
      ) : (
        <>
          <SectionTitle>browse categories</SectionTitle>
          <S.CategoryList>{categoryItems()}</S.CategoryList>}
        </>
      )}
    </S.CategoriesSection>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesAsArray,
});

export default connect(mapStateToProps)(CategoriesSection);
