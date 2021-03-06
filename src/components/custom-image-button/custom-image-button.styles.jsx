import styled from 'styled-components';

export const CustomImageButton = styled.button`
  font-size: 2.4rem;
  background: rgba(0, 0, 0, 0.741);
  color: white;
  position: absolute;
  width: 80%;
  height: 70px;
  text-align: center;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 800px) {
    display: block;
    bottom: 10%;
    justify-content: center;
  }
`;

export const StyledComponents = {
  CustomImageButton,
};
