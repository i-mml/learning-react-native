import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetail Screen!</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
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
export default MealDetailScreen;
