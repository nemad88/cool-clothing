import styled, { css } from "styled-components";
import { pulsing } from "../utils/animations.styles";
import { ReactComponent as FavoritesIcon } from "../../assets/img/favorites.svg";
import { ReactComponent as PersonIcon } from "../../assets/img/person.svg";
import { ReactComponent as ShopbagIcon } from "../../assets/img/shopbag.svg";

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

export const HeaderNavContainer = styled.div`
  grid-area: nav;  
  display: flex;  
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {    
    justify-content: flex-end;
  }
`;

export const ShopBagIconStyled = styled(ShopbagIcon)`
  ${commonStyle}
`;

export const PersonIconStyled = styled(PersonIcon)`
  ${commonStyle}
`;

export const FavoritesIconStyled = styled(FavoritesIcon)`
  ${commonStyle}
`;
