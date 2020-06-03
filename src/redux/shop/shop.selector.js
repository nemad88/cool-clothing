import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCategoriesCollection = createSelector(
  [selectShop],
  (shop) => shop.categories
);

export const selectCategoriesAsArray = createSelector(
  [selectCategoriesCollection],
  (categories) =>
    categories ? Object.keys(categories).map((key) => categories[key]) : []
);

// JUST FOR UPLOAD TODO: REMOVE
// export const selectDataForUpload = createSelector([selectShop], (shop) =>
//   shop ? Object.keys(shop).map((key) => shop[key]) : []
// );

export const selectIsCategoriesFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCategoriesLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.categories
);

export const selectNavIsOpen = createSelector(
  [selectShop],
  (shop) => !!shop.navIsOpen
);

export const selectAllItemsAsArray = createSelector(
  [selectCategoriesAsArray],
  (categories) => {
    return categories.map((category) => category.items).flat();
  }
);

export const selectHotItems = createSelector(
  [selectAllItemsAsArray],
  (items) => {
    return items.filter((item) => item.hot);
  }
);

export const selectSearchResult = createSelector(
  [selectShop],
  (shop) => shop.searchResult
);

export const selectCart = createSelector([selectShop], (shop) => shop.cart);
