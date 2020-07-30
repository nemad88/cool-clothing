import React from 'react';

import { StyledComponents as S } from './custom-button.styles';

const CustomButton = ({ children, customWidth, handleClick }) => (
  <S.CustomButton onClick={handleClick} customWidth={customWidth}>
    {children}
  </S.CustomButton>
);

export default CustomButton;
