import { SearchActionTypes } from "./search.type";

const INITIAL_STATE = {
  searchResult: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_ITEM:
      return {
        ...state,
        searchResult: action.payload,
      };
    case SearchActionTypes.CLEAR_SEARCH:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default searchReducer;
