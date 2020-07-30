import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  padding-bottom: 5rem;
  opacity: 0.5;
  z-index: 98;
  background: white;
  opacity: 0;
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    &.open {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
`;

const MenuItem = styled(Link)`
  font-size: 3.6rem;
  color: black;
`;

export const StyledComponents = {
  BurgerMenu,
  MenuItem,
};
