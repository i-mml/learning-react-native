import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props?.navigation?.getParam("categoryId");
  const categoryData = CATEGORIES?.find((cat) => cat?.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The CategoryMeals Screen!</Text>
      <Text>This is {categoryData?.title}</Text>

      <Button
        title="Go to Details"
        onPress={() => {
          props?.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
