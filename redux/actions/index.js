export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_OF_FAVORITE = "REMOVE_OF_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const addToFavorite = (meal) => {
  return {
    type: ADD_TO_FAVORITE,
    mealObject: meal,
  };
};

const removeOfFavorite = (meal) => {
  return {
    type: REMOVE_OF_FAVORITE,
    mealId: meal?.id,
  };
};

const toggleFavorite = (meal) => {
  return {
    type: TOGGLE_FAVORITE,
    mealObject: meal,
  };
};

export { removeOfFavorite, addToFavorite, toggleFavorite };
