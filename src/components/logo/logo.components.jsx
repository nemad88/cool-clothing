import React from "react";
import { Link } from "react-router-dom";

import { StyledComponents as S } from "./logo.styles";

const Logo = () => (
  <S.LogoContainer>
    <Link to={process.env.PUBLIC_URL}>
      <S.Logo />
    </Link>
  </S.LogoContainer>
);

export default Logo;
