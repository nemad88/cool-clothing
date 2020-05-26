import React from "react";

import Logo from "../header-logo/header-logo.components";
import HeaderNav from "../header-nav/header-nav.component";
import Burger from "../header-burger/header-burger.component";
import HeaderCategoryNav from "../header-category-nav/header-category-nav.component";
import BigButtons from "../header-big-buttons/header-big-buttons.components";

import { HeaderSectionContainer, HeaderTopContainer } from "./header.styles";

import HeaderSearch from "../header-search/header-search.component";

const Header = () => (
  <HeaderSectionContainer>
    <HeaderTopContainer>
      <Logo />
      <HeaderSearch />
      <HeaderNav />
      <Burger />
    </HeaderTopContainer>
    <HeaderCategoryNav />
    <BigButtons />
  </HeaderSectionContainer>
);

export default Header;
