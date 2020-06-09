import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  height: 150px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 98;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 800px) {
    height: 120px;
  }

  &.closed {
    transform: translateY(-50%);

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
