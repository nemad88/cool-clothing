import React, { useLayoutEffect } from "react";

import Hot from "../../components/hot-section/hot-section.component";
import Footer from "../../components/footer/footer.component";

import CategoryOverviewContainer from "../../components/category-overview/category-overview.container";
import CartBox from "../../components/cart-box/cart-box.component";

const Category = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CartBox />

      <CategoryOverviewContainer />
      <Hot />
      <Footer />
    </div>
  );
};

export default Category;
