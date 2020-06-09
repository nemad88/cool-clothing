import React from "react";

import Hero from "../../components/hero/hero.component";
import CategoriesSectionContainer from "../../components/categories-section/categories-section.container";
import Hot from "../../components/hot-section/hot-section.component";
import Footer from "../../components/footer/footer.component";

import CartBox from "../../components/cart-box/cart-box.component";

const Homepage = () => {
  return (
    <div>
      <CartBox />      
      <Hero />
      <CategoriesSectionContainer />
      <Hot />
      <Footer />
    </div>
  );
};

export default Homepage;
