import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import searchReducer from "./search/search.reducer";
import cartReducer from "./cart/cart.reducer";
import burgerReducer from "./burger/burger.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  search: searchReducer,
  cart: cartReducer,
  burger: burgerReducer,
});

export default persistReducer(persistConfig, rootReducer);
