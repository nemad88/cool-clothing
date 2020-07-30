import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  height: 120px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 98;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 800px) {
  }

  &.closed {
    transform: translateY(-55%);

    @media screen and (max-width: 800px) {
      transform: translateY(0%);
    }

    &:hover {
      transform: translateY(0%);
    }
  }
`;

export const StyledComponents = {
  Header,
};
