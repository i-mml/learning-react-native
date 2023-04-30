import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  const favoritesMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal?.id === "m2"
  );

  return <MealList dataList={favoritesMeals} navigation={navigation} />;
};

export default FavoritesScreen;
