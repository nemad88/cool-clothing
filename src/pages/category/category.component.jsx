import React, { useLayoutEffect } from "react";

import HotSection from "../../components/hot-section/hot-section.component";
import CartBox from "../../components/cart-box/cart-box.component";
import Modal from "../../components/modal/modal.component";

import CategoryOverviewContainer from "../../components/category-overview/category-overview.container";

import { StyledComponents as S } from "./category.styles";

const Category = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.CategoryPage>
      <Modal>This is a modal window</Modal>
      <CartBox />
      <CategoryOverviewContainer />
      <HotSection />
    </S.CategoryPage>
  );
};

export default Category;
