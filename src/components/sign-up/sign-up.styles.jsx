import styled from "styled-components";

const SignUpContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10rem 0 10rem;
`;

const SubmitButton = styled.input`
  width: 150px;
  padding: 1rem;
  background: black;
  color: white;
  border: 1px solid black;
  margin-top: 1rem;
  
`;

const Title = styled.h1`
  color: black;
  margin: 2rem;
`;

export const StyledComponents = {
  SignUpContainer,
  SubmitButton,
  Title,
};
