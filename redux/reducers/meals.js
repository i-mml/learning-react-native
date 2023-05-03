import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReudcer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state?.favoriteMeals?.findIndex(
        (meal) => meal?.id === action?.mealObject?.id
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state?.favoriteMeals];
        updatedFavMeals?.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals,
        };
      } else {
        return {
          ...state,
          favoriteMeals: state?.favoriteMeals?.concat(action?.mealObject),
        };
      }
    default:
      return state;
  }
};

export default mealsReudcer;
