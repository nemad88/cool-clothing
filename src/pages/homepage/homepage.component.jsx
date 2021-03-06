import React, { useLayoutEffect } from 'react';

import HeroSection from '../../components/hero/hero.component';
import CategoriesSection from '../../components/categories-section/categories-section.component';
import HotSection from '../../components/hot-section/hot-section.component';
import CartBox from '../../components/cart-box/cart-box.component';
import Modal from '../../components/modal/modal.component';

const Homepage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Modal />
      <CartBox />
      <HeroSection />
      <CategoriesSection />
      <HotSection />
    </div>
  );
};

export default Homepage;
