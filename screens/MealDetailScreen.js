import React, { useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeOfFavorite,
  toggleFavorite,
} from "../redux/actions";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props?.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, mealTitle } = route.params;

  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state?.meals?.meals);
  const favoriteMeals = useSelector((state) => state?.meals?.favoriteMeals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(selectedMeal));
  };

  useEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Favorite"
              iconName={
                favoriteMeals?.includes(selectedMeal)
                  ? "ios-star"
                  : "star-outline"
              }
              onPress={handleFavoriteToggle}
            />
          </HeaderButtons>
        );
      },
    });
  }, [favoriteMeals?.includes(selectedMeal)]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity?.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordablitiy?.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles?.title}>Ingredients</Text>

      {selectedMeal?.ingredients?.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles?.title}>Steps</Text>
      {selectedMeal?.steps?.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
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
  title: {
    fontFamily: "iran-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 9,
  },
});
export default MealDetailScreen;
