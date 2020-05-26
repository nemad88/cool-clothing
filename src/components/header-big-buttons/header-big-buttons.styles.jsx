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

export const BigButtonsContainer = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BigButtonMens = styled.div`
  ${buttonStyles}
  background-color: #0fceac;
  ${buttonHover}
`;

export const BigButtonWomens = styled.div`
  ${buttonStyles}
  background-color: #ffa27a;
  ${buttonHover}
`;
