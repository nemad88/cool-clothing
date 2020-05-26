import React from "react";
import { Link } from "react-router-dom";

import { LogoContainer, LogoSvg } from "./header-logo.styles";

const Logo = () => (
  <LogoContainer>
    <Link to="/">
      <LogoSvg />
    </Link>
  </LogoContainer>
);

export default Logo;
