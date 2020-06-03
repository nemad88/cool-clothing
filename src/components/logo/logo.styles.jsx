import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/img/Logo.svg";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: logo;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 8rem;
`;

export const StyledComponents = {
  Logo,
  LogoContainer,
};
