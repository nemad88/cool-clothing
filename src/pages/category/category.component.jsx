import React, { useLayoutEffect } from 'react';

import HotSection from '../../components/hot-section/hot-section.component';
import CartBox from '../../components/cart-box/cart-box.component';
import Modal from '../../components/modal/modal.component';

import { StyledComponents as S } from './category.styles';
import CategoryOverview from '../../components/category-overview/category-overview.component';

const Category = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.CategoryPage>
      <Modal>This is a modal window</Modal>
      <CartBox />
      <CategoryOverview />
      <HotSection />
    </S.CategoryPage>
  );
};

export default Category;
