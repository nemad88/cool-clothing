import styled, { css } from "styled-components";

const commonSpanStyle = css`
  padding: 0.2rem 2rem;
  background: black;
  margin: 0.5rem 0;
  display: block;
  transition: all 0.5s ease;
`;

export const BurgerIcon = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  margin: 2rem;

  @media screen and (max-width: 800px) {
    display: block;
    z-index: 999;
  }
`;

export const BurgerIconSpan1 = styled.span`
  &.toggle {
    transform: rotateZ(45deg) translateY(300%);
    background: black;
  }
  ${commonSpanStyle}
`;

export const BurgerIconSpan2 = styled.span`
  &.toggle {
    opacity: 0;
  }
  ${commonSpanStyle}
`;

export const BurgerIconSpan3 = styled.span`
  &.toggle {
    transform: rotateZ(-45deg) translateY(-310%);
    background: black;
  }
  ${commonSpanStyle}
`;

export const StyledComponents = {
  BurgerIcon,
  BurgerIconSpan1,
  BurgerIconSpan2,
  BurgerIconSpan3,
};
