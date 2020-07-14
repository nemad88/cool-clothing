import styled from "styled-components";

const SignInContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rem 10rem 10rem;
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
  SignInContainer,
  SubmitButton,
  Title,
};
