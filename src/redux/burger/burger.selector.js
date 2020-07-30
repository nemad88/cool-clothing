import { createSelector } from 'reselect';

export const selectBurger = (state) => state.burger;

export const selectBurgerMenuIsOpen = createSelector(
  [selectBurger],
  (burger) => !!burger.burgerMenuIsOpen
);
