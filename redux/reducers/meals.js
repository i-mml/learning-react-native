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
      console.log("existingIndex", existingIndex);

      if (existingIndex >= 0) {
        return {
          ...state,
          favoriteMeals: state?.favoriteMeals?.filter(
            (item) => item?.id !== action?.mealObject?.id
          ),
        };
      } else {
        return {
          ...state,
          favoriteMeals: [...state?.favoriteMeals, action?.mealObject],
        };
      }
    default:
      return state;
  }
};

export default mealsReudcer;
