import ShopActionTypes from "./shop.types";

// JUST FOR UPLOAD TODO: REMOVE
//import { SHOP_DATA } from "../shop-data";
//const INITIAL_STATE = SHOP_DATA;

const INITIAL_STATE = {
  categories: null,
  searchResult: [],
  cart: [],
  isFetching: false,
  errorMessage: undefined,
  navIsOpen: false
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
    case ShopActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case ShopActionTypes.SEARCH_ITEM:
      return {
        ...state,
        searchResult: action.payload,
      };
    case ShopActionTypes.CLEAR_SEARCH:
      return {
        ...state,
      };
    case ShopActionTypes.TOGGLE_BURGER: return {
      ...state,
      navIsOpen: !state.navIsOpen
    }
    default:
      return state;
  }
};

export default shopReducer;
