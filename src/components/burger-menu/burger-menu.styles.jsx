import styled from "styled-components";

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  z-index: 98;
  background: red;
  width: 100%;
  height: 100%;

  &.open {
    display: block;
  }
`;

export const StyledComponents = {
  BurgerMenu,
};
