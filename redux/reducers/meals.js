import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions";

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state?.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters?.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters?.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      console.log("updatedFilteredMeals", updatedFilteredMeals);

      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReudcer;
