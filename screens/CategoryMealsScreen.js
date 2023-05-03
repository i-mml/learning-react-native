import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { catId } = route.params;
  const categoryData = CATEGORIES?.find((cat) => cat?.id === catId);

  const availableMeals = useSelector((state) => state?.meals?.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds?.indexOf(catId) >= 0
  );

  useEffect(() => {
    navigation.setOptions({
      title: categoryData?.title,
    });
  }, []);

  return <MealList dataList={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData?.navigation?.getState("categoryId");
  const categoryData = CATEGORIES?.find((cat) => cat?.id === catId);

  return {
    headerTitle: categoryData?.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "white",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

export default CategoryMealsScreen;
