import React from "react";
import { Link } from "react-router-dom";

import { LogoContainer, LogoSvg } from "./header-logo.styles";

const Logo = () => (
  <LogoContainer>
    <Link to={process.env.PUBLIC_URL}>
      <LogoSvg />
    </Link>
  </LogoContainer>
);

export default Logo;
