import styled, {css} from "styled-components";

const commonSpanStyle = css`
padding: 0.2rem 2rem;
  background: black;
  margin: 0.5rem 0;
  display: block;
  transition: all 0.5s ease;
`;


export const Burger = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  margin: 2rem;

  @media screen and (max-width: 578px) {
    
  }
  
  @media screen and (max-width: 800px) {
    display: block;
    z-index: 99;
  }
  
`;


export const BurgerSpan1 = styled.span`
   &.toggle {
   transform: rotateZ(45deg) translateY(300%);
    background: green;
  } 
  ${commonSpanStyle}
`;

export const BurgerSpan2 = styled.span`
  
   &.toggle {
 opacity: 0;
  } 
  ${commonSpanStyle}
`;

export const BurgerSpan3 = styled.span`
 &.toggle {
   transform: rotateZ(-45deg) translateY(-310%);
    background: green;
  }   
${commonSpanStyle}
  
`;

export const StyledComponents = {
    Burger,
    BurgerSpan1,
    BurgerSpan2,
    BurgerSpan3
}
