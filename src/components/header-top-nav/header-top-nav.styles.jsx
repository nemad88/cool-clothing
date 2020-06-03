import styled, { css } from "styled-components";
import { pulsing } from "../utils/animations.styles";
import { ReactComponent as FavoritesIconSVG } from "../../assets/img/favorites.svg";
import { ReactComponent as PersonIconSVG } from "../../assets/img/person.svg";
import { ReactComponent as CartIconSVG } from "../../assets/img/shopbag.svg";

const commonStyle = css`
  margin: 0 15px;
  width: 30px;
  min-width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    animation: ${pulsing} 0.5s ease alternate infinite;
  }
`;

export const HeaderTopNav = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: flex-end;
  }
`;

export const CartIcon = styled(CartIconSVG)`
  ${commonStyle}
`;

export const PersonIcon = styled(PersonIconSVG)`
  ${commonStyle}
`;

export const FavoritesIcon = styled(FavoritesIconSVG)`
  ${commonStyle}
`;

export const StyledComponents = {
  HeaderTopNav,
  CartIcon,
  PersonIcon,
  FavoritesIcon,
};
