import React from 'react';

import { StyledComponents as S } from './custom-image.styles';

const CustomImage = ({ customWidth, imageUrl }) => (
  <S.CustomImage src={imageUrl} customWidth={customWidth} />
);

export default CustomImage;
