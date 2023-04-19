import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // when we want to go to the current screen we use navigation.push("ROUTE_NAME")
          props?.navigation.navigate("CategoryMeals");
        }}
        style={styles?.gridItem}
      >
        <View>
          <Text>{itemData?.item?.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item) => item?.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
