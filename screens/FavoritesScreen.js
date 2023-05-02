import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state?.meals?.favoriteMeals);
  console.log("availableMeals", availableMeals);

  return <MealList dataList={availableMeals} navigation={navigation} />;
};

export default FavoritesScreen;
