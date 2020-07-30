import { SearchActionTypes } from './search.type';

export const searchItems = (searchResult) => ({
  type: SearchActionTypes.SEARCH_ITEM,
  payload: searchResult,
});

export const clearSearch = {
  type: SearchActionTypes.CLEAR_SEARCH,
};
