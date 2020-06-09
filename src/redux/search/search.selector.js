import { createSelector } from "reselect";
import { selectAllItemsAsArray } from "../shop/shop.selector";

export const selectSearch = (state) => state.search;

export const selectSearchResult = createSelector(
  [selectSearch],
  (shop) => shop.searchResult
);

export const selectSearchedItems = (searchFor) => {
  return createSelector([selectAllItemsAsArray], (allItem) => {
    return allItem.filter(
      (item) =>
        item.name.toLowerCase().includes(searchFor.toLowerCase()) ||
        item.sex.toLowerCase() === searchFor.toLowerCase()
    );
  });
};
