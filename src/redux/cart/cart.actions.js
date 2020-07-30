import CartActionTypes from './cart.types';

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const removeAllFromAnItem = (item) => ({
  type: CartActionTypes.REMOVE_ALL_FROM_AN_ITEM,
  payload: item,
});
