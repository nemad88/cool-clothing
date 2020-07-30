import React from 'react';

import { StyledComponents as S } from './custom-image-button.styles';

const JumpButton = ({ children }) => (
  <S.CustomImageButton>{children}</S.CustomImageButton>
);

export default JumpButton;
