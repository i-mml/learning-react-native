import { combineReducers, createStore } from "redux";
import productsReudcer from "../reducers/products";
import cartReducer from "../reducers/cart";
import ordersReducer from "../reducers/orders";

const rootReducer = combineReducers({
  products: productsReudcer,
  cart: cartReducer,
  orders: ordersReducer,
});

export const store = createStore(rootReducer);
