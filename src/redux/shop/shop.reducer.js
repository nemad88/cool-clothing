import ShopActionTypes from "./shop.types";

// JUST FOR UPLOAD TODO: REMOVE
//import { SHOP_DATA } from "../shop-data";
//const INITIAL_STATE = SHOP_DATA;

const INITIAL_STATE = {
  categories: null,
  isFetching: true,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
      };
    case ShopActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case ShopActionTypes.TOGGLE_BURGER:
      return {
        ...state,
        navIsOpen: !state.navIsOpen,
      };
    default:
      return state;
  }
};

export default shopReducer;
