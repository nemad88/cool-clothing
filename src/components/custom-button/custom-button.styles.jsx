import styled from 'styled-components';

export const CustomButton = styled.div`
  cursor: pointer;
  background: white;
  color: black;
  border: black 1px solid;
  font-size: 1.6rem;
  padding: 1rem;
  width: ${(props) => props.customWidth};
  font-weight: bold;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background: black;
    color: white;
  }
`;

export const StyledComponents = {
  CustomButton,
};
