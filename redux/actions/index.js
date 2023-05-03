export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_OF_FAVORITE = "REMOVE_OF_FAVORITE";

const addToFavorite = (meal) => {
  return {
    type: ADD_TO_FAVORITE,
    mealObject: meal,
  };
};

const removeOfFavorite = (id) => {
  return {
    type: REMOVE_OF_FAVORITE,
    mealId: id,
  };
};

export { removeOfFavorite, addToFavorite };
