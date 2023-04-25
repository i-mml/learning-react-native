import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCompnent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCompnent = TouchableNativeFeedback;
  }
  return (
    <View style={styles?.gridItem}>
      <TouchableCompnent style={{ flex: 1 }} onPress={props?.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props?.color, height: "100%" },
          }}
        >
          <Text style={styles.title}>{props?.title}</Text>
        </View>
      </TouchableCompnent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform?.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "iran-sans",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGridTile;
