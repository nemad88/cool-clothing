import React from "react";

import { StyledComponents as S } from "./hero.styles.component";

const Hero = () => (
  <S.Hero>
    <S.HeroTitle>CHECK OUR NEW SUMMER COLLECTION</S.HeroTitle>
    <S.HeroSubtitle>Essentials for summer, check it</S.HeroSubtitle>
    <S.HeroButton to="/categories/swim">CHECK</S.HeroButton>
  </S.Hero>
);

export default Hero;
