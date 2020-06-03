import styled, { css } from "styled-components";

const buttonStyles = css`
  flex: 1 1;
  text-align: center;
  cursor: pointer;
  color: black;
  margin: 0.5rem;
  padding: 0.3rem;
`;

const buttonHover = css`
  &:hover {
    color: white;
  }
`;

export const BigButtons = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MensButton = styled.div`
  ${buttonStyles}
  background-color: #0fceac;
  ${buttonHover}
`;

export const WomensButton = styled.div`
  ${buttonStyles}
  background-color: #ffa27a;
  ${buttonHover}
`;

export const StyledComponents = {
  BigButtons,
  MensButton,
  WomensButton,
};
