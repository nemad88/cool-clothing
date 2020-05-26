import React from "react";

import {
  HeroContainer,
  Title,
  Subtitle,
  HeroButton,
} from "./hero.styles.component";

const Hero = () => (
  <HeroContainer>
    <Title>CHECK OUR NEW SUMMER COLLECTION</Title>
    <Subtitle>Essentials for summer, check it</Subtitle>
    <HeroButton to="/summer">CHECK</HeroButton>
  </HeroContainer>
);

export default Hero;
