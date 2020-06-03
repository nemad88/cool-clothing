import React from "react";

import Logo from "../logo/logo.components";
import HeaderTopNav from "../header-top-nav/header-top-nav.component";
import HeaderCategoryNav from "../header-category-nav/header-category-nav.component";
import BigButtons from "../header-big-buttons/header-big-buttons.components";
import HeaderTop from "../header-top/header-top.component";

import { StyledComponents as S } from "./header.styles";

import HeaderSearch from "../header-search/header-search.component";

const Header = () => (
  <S.Header>
    <HeaderTop>
      <Logo />
      <HeaderSearch />
      <HeaderTopNav />
    </HeaderTop>
    <HeaderCategoryNav />
    <BigButtons />
  </S.Header>
);

export default Header;
