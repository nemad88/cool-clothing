import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCategoriesSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCategoriesStart = () => ({
  type: ShopActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesMap) => ({
  type: ShopActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesMap,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const fetchCategoriesStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    const collectionRef = firestore.collection("categories").orderBy("title");

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCategoriesSnapshotToMap(snapshot);
        dispatch(fetchCategoriesSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCategoriesFailure(err.message)));
  };
};

export const addItemToCart = (item) => ({
  type: ShopActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const searchItems = (searchResult) => ({
  type: ShopActionTypes.SEARCH_ITEM,
  payload: searchResult,
});

export const clearSearch = {
  type: ShopActionTypes.CLEAR_SEARCH,
};

export const toggleBurger = {
  type: ShopActionTypes.TOGGLE_BURGER,
};
