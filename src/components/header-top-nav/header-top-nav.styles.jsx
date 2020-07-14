import styled, { css } from "styled-components";

import { ReactComponent as PersonIconSVG } from "../../assets/img/person.svg";
import { ReactComponent as CartIconSVG } from "../../assets/img/shopbag.svg";
import { ReactComponent as LogoutSVG } from "../../assets/img/logout.svg";

const iconStyle = css`
  width: 30px;
  height: 30px;
  min-width: 30px;

  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin: 0 5px;
  }
`;

export const HeaderTopNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
  width: 100%;

  @media screen and (max-width: 800px) {
    order: 2;
    flex-basis: 50%;
    justify-content: flex-end;
    padding-right: 10px;
  }
`;

export const CartIcon = styled(CartIconSVG)`
  ${iconStyle}
`;

export const PersonIcon = styled(PersonIconSVG)`
  ${iconStyle}
`;

export const Logout = styled(LogoutSVG)`
  ${iconStyle}

  &:hover {
    path {
      fill: #b00000;
    }
  }
`;

export const StyledComponents = {
  HeaderTopNav,
  CartIcon,
  PersonIcon,
  Logout,
};
