import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Text } from "react-native";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item?.title}
        duration={itemData.item?.duration}
        complexity={itemData.item?.complexity}
        affordablitiy={itemData.item?.affordablitiy}
        image={itemData.item?.imageUrl}
        onSelectMeal={() =>
          props?.navigation.navigate("MealDetail", {
            mealId: itemData.item?.id,
          })
        }
      />
    );
  };

  const catId = props?.navigation?.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds?.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "90%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData?.navigation?.getParam("categoryId");
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
