import React, { useLayoutEffect } from "react";

import Hot from "../../components/hot-section/hot-section.component";
import Footer from "../../components/footer/footer.component";

import CategoryOverviewContainer from "../../components/category-overview/category-overview.container";
import CartBox from "../../components/cart-box/cart-box.component";

import { StyledComponents as S } from "./category.styles";

const Category = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.CategoryPage>
      <CartBox />
      <CategoryOverviewContainer />
      <Hot />
      <Footer />
    </S.CategoryPage>
  );
};

export default Category;
