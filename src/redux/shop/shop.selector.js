import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCategoryNames = createSelector([selectShop],
     (shop) => shop.map(category => category.title)
  
);
