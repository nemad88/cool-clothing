import BurgerActionTypes from "./burger.types";

const INITIAL_STATE = {
  burgerMenuIsOpen: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BurgerActionTypes.TOGGLE_BURGER:
      return {
        ...state,
        burgerMenuIsOpen: !state.burgerMenuIsOpen,
      };
    default:
      return {
        ...state,
      };
  }
};

export default shopReducer;
