import React, { useEffect, useState } from "react";

import Logo from "../logo/logo.components";
import HeaderTopNav from "../header-top-nav/header-top-nav.component";
import HeaderCategoryNav from "../header-category-nav/header-category-nav.component";
import HeaderTop from "../header-top/header-top.component";

import { StyledComponents as S } from "./header.styles";

import HeaderSearch from "../header-search/header-search.component";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <S.Header className={offset > 100 ? "closed" : null}>
      <HeaderTop>
        <Logo />
        <HeaderSearch />
        <HeaderTopNav />
      </HeaderTop>
      <HeaderCategoryNav />
    </S.Header>
  );
};

export default Header;
