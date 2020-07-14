import React from "react";

import { StyledComponents as S } from "./form-input.styles";

const FormInput = ({
  errorMessage,
  handleChange,
  label,
  id,
  ...otherProps
}) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={id}>{label}:</S.Label>
      {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      <S.Input onChange={handleChange} id={id} {...otherProps} />
    </S.InputContainer>
  );
};

export default FormInput;
