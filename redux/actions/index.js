const addToFavorite = (meal) => {
  return {
    type: "ADD_TO_FAVORITE",
    payload: meal,
  };
};

const removeOfFavorite = (id) => {
  return {
    type: "REMOVE_OF_FAVORITE",
    payload: id,
  };
};

export { removeOfFavorite, addToFavorite };
