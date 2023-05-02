import { combineReducers, createStore } from "redux";
import mealsReudcer from "../reducers/meals";

const rootReducer = combineReducers({
  mealsReudcer,
});

export const store = createStore(rootReducer);
