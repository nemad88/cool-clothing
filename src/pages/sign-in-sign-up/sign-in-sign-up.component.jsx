import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { StyledComponents as S } from './sign-in-sign-up.styles';

const SignInSignUp = () => {
  return (
    <S.SignInSignUpcontainer>
      <SignIn />
      <SignUp />
    </S.SignInSignUpcontainer>
  );
};

export default SignInSignUp;
