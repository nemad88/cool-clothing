import React from "react";

import Hero from "../../components/hero/hero.component";
import CategoriesOverviewContainer from "../../components/categories-section/categories-section.container";
import Hot from "../../components/hot-section/hot-section.component";
import Footer from "../../components/footer/footer.component";
import BurgerMenu from "../../components/burger-menu/burger-menu.component";

const Homepage = () => {
  return (
    <div>
      <BurgerMenu />
      <Hero />
      <CategoriesOverviewContainer />
      <Hot />
      <Footer />
    </div>
  );
};

export default Homepage;
