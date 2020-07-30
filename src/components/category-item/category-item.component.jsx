import React from 'react';
import { Link } from 'react-router-dom';

import { StyledComponents as S } from './category-item.styles';

import JumpButton from '../custom-image-button/custom-image-button.component';
import CustomImage from '../custom-image/custom-image.component';

const CategoryItem = ({ title, imageUrl, routeName }) => {
  return (
    <S.CategoryItem>
      <Link to={'/categories/' + routeName}>
        <CustomImage imageUrl={imageUrl} customWidth="28rem" alt="" />
        <S.CategoryItemTitle>{title}</S.CategoryItemTitle>
        <JumpButton>JUMP</JumpButton>
      </Link>
    </S.CategoryItem>
  );
};

export default CategoryItem;
