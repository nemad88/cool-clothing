import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";


const INITIAL_STATE = {
  cartItems: [],
  cartIsOpened: false,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case CartActionTypes.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }
    case CartActionTypes.TOGGLE_CART: {
      return {
        ...state,
        cartIsOpened: !state.cartIsOpened,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
