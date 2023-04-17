import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CategoriesScreen = (props) => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          // when we want to go to the current screen we use navigation.push("ROUTE_NAME")
          props?.navigation.navigate("CategoryMeals");
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

export default CategoriesScreen;
