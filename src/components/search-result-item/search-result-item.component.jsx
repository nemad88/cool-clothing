import React from "react";
import { connect, useDispatch } from "react-redux";

import { StyledComponents as S } from "./search-result-item.styles";
import CustomImage from "../custom-image/custom-image.component";

import { addItemToCart } from "../../redux/cart/cart.actions";
import { showModal, hideModal } from "../../redux/modal/modal.actions";

const SearchResultItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();

  return (
    <S.SearchResultItem>
      <div style={{ flex: "1 1 5rem" }}>
        <CustomImage customWidth={"100%"} imageUrl={imageUrl} />
      </div>
      <S.SearchResultItemDetails>
        <S.SearchResultItemTitle>{name}</S.SearchResultItemTitle>
        <S.SearchResultItemPrice>${price}</S.SearchResultItemPrice>
        <S.SearchResultItemButton
          onClick={() => {
            addItem(item);

            dispatch(showModal(item.name + " added to the cart"));
            setTimeout(() => {
              dispatch(hideModal());
            }, 1500);
          }}
        >
          ADD TO CART
        </S.SearchResultItemButton>
      </S.SearchResultItemDetails>
    </S.SearchResultItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(SearchResultItem);
