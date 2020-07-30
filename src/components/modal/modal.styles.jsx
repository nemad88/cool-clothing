import styled from 'styled-components';

const ModalContainer = styled.div`
  position: relative;
  position: fixed;
  bottom: 2%;
  left: 2%;
  background: white;
  border: 1px solid black;
  transition: all 0.5s ease-out;
  z-index: 999;
  text-align: center;
  font-size: 1.6rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 0;

  @media screen and (max-width: 800px) {
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }

  &.visible {
    opacity: 1;
  }
`;

export const StyledComponents = {
  ModalContainer,
};
