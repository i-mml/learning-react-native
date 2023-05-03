import { MEALS } from "../../data/dummy-data";
import { ADD_TO_FAVORITE, REMOVE_OF_FAVORITE } from "../actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReudcer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteMeals: [...state?.favoriteMeals, action?.mealObject],
      };
    case REMOVE_OF_FAVORITE:
      return {
        ...state,
        favoriteMeals: state?.favoriteMeals?.filter(
          (item) => item?.id !== action?.mealId
        ),
      };
    default:
      return state;
  }
};

export default mealsReudcer;
