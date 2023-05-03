import { combineReducers, createStore } from "redux";
import productsReudcer from "../reducers/products";

const rootReducer = combineReducers({
  products: productsReudcer,
});

export const store = createStore(rootReducer);
