import React from "react";

import { NavListStyled, NavListLinkStyled } from "./header-category-nav.styles";

const HeaderCategoryNav = () => (
  <NavListStyled>
    <li>
      <NavListLinkStyled to="/jackets">Jackets</NavListLinkStyled>
    </li>
    <li>
      <NavListLinkStyled to="/swim">Swim</NavListLinkStyled>
    </li>
    <li>
      <NavListLinkStyled to="/shoes">Shoes</NavListLinkStyled>
    </li>
    <li>
      <NavListLinkStyled to="/hats">Hats</NavListLinkStyled>
    </li>
    <li>
      <NavListLinkStyled to="/shirts">Shirts</NavListLinkStyled>
    </li>
  </NavListStyled>
);

export default HeaderCategoryNav;
