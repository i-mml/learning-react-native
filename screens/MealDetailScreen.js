import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Favorite"
              iconName="ios-star"
              onPress={() => console.log("mark as Favorite")}
            />
          </HeaderButtons>
        );
      },
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      {/* navigation.popToTop is used to go to top of navigation (just in stack navigation) */}
      <Button
        title="Go To Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData?.navigation?.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("mark as Favorite")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetailScreen;
