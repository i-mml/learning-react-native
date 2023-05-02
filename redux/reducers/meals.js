import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReudcer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoriteMeals: [...state?.favoriteMeals, action?.payload],
      };
    case "REMOVE_OF_FAVORITE":
      return {
        ...state,
        favoriteMeals: state?.favoriteMeals?.filter(
          (item) => item?.id !== action?.payload
        ),
      };
    default:
      return state;
  }
};

export default mealsReudcer;
