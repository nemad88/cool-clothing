import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/img/LogoNew.svg';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background: blue; */
  flex-basis: 30%;
  @media screen and (max-width: 800px) {
    order: 1;
    flex-basis: 50%;
    padding-left: 10px;
  }
`;

export const Logo = styled(LogoSVG)`
  height: 30px;
  width: 100%;
`;

export const StyledComponents = {
  Logo,
  LogoContainer,
};
