import { combineReducers, createStore } from "redux";
import productsReudcer from "../reducers/products";
import cartReducer from "../reducers/cart";
import ordersReducer from "../reducers/orders";
import authReducer from "../reducers/auth";

const rootReducer = combineReducers({
  products: productsReudcer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);
