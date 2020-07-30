import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.6rem;
  color: black;
  width: 350px;
  margin: 0.5rem 0;
`;

const Input = styled.input`
  padding: 1rem;
  background: white;
  color: black;
  width: 100%;
  user-select: auto;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: 700;
`;

const Label = styled.label`
  font-weight: 700;
  margin: 1rem 0;
`;

export const StyledComponents = {
  InputContainer,
  Input,
  ErrorMessage,
  Label,
};
