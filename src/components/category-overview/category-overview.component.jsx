import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCategory } from "../../redux/shop/shop.selector";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { showModal, hideModal } from "../../redux/modal/modal.actions";

import { StyledComponents as S } from "./category-overview.styles";

import CustomImage from "../custom-image/custom-image.component";
import SectionTitle from "../section-title/section-title.components";
import CustomImageButton from "../custom-image-button/custom-image-button.component";

const CategoryOverview = () => {
  const { slug } = useParams();
  const category = useSelector(selectCategory(slug));
  const dispatch = useDispatch();
  const { items } = category;

  const renderedItems = items.map((item) => (
    <S.ProductItem
      onClick={() => {
        dispatch(addItemToCart(item));
        dispatch(showModal(item.name + " added to the cart"));
        setTimeout(() => {
          dispatch(hideModal());
        }, 1500);
      }}
      key={item.id}
    >
      <CustomImage customWidth="300px" imageUrl={item.imageUrl}></CustomImage>
      <CustomImageButton>ADD TO CART</CustomImageButton>
      <S.Title>{item.name}</S.Title>
      <S.Price>${item.price}</S.Price>
    </S.ProductItem>
  ));

  return (
    <S.CategoryOverview>
      <SectionTitle>{category.title}</SectionTitle>
      <S.CategoryItemsList>{renderedItems}</S.CategoryItemsList>
    </S.CategoryOverview>
  );
};

export default CategoryOverview;
