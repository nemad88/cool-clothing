import React, { useState } from 'react';

import { StyledComponents as S } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';

import { auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Wrong password or username');
      console.error(e);
    }
  };

  return (
    <S.SignInContainer onSubmit={handleSubmit}>
      <S.Title>Sign in</S.Title>

      <FormInput
        label="Email"
        type="email"
        name="email"
        id="email-signin"
        handleChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <FormInput
        label="Password"
        type="password"
        name="password"
        id="password-signin"
        errorMessage={errorMessage}
        handleChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <S.SubmitButton type="submit" value="Submit" />
    </S.SignInContainer>
  );
};

export default SignIn;
