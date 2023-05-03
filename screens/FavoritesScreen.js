import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state?.meals?.favoriteMeals);
  console.log("availableMeals", favMeals);

  if (favMeals?.length === 0 || !favMeals) {
    return (
      <View style={styles.notFound}>
        <DefaultText styles={styles.notFoundText}>
          No Favorite meals found. Start adding some!
        </DefaultText>
      </View>
    );
  }
  return <MealList dataList={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  notFoundText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default FavoritesScreen;
