export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const toggleFavorite = (meal) => {
  return {
    type: TOGGLE_FAVORITE,
    mealObject: meal,
  };
};

export { toggleFavorite };
