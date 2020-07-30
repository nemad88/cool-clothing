import React, { useState } from 'react';

import { StyledComponents as S } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';

import { auth, createUserProfileDocuemnt } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password don't match");
      return;
    } else {
      setErrorMessage('');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocuemnt(user, { displayName });

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setDisplayName('');
    } catch (error) {}
  };

  return (
    <S.SignUpContainer onSubmit={handleSubmit}>
      <S.Title>Sign up</S.Title>

      <FormInput
        label="Display name"
        type="text"
        name="text"
        id="display-name-signup"
        value={displayName}
        handleChange={(event) => {
          setDisplayName(event.target.value);
        }}
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        id="email-signup"
        value={email}
        handleChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <FormInput
        value={password}
        label="Password"
        type="password"
        name="password"
        id="password-signup"
        handleChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <FormInput
        value={confirmPassword}
        label="Confirm password"
        type="password"
        name="password"
        id="confirm-password-signup"
        handleChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
        errorMessage={errorMessage}
      />

      <S.SubmitButton type="submit" value="Submit" />
    </S.SignUpContainer>
  );
};

export default SignUp;
