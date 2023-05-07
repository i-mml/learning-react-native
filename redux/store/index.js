import { combineReducers, createStore } from "redux";
import productsReudcer from "../reducers/products";
import cartReducer from "../reducers/cart";

const rootReducer = combineReducers({
  products: productsReudcer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
