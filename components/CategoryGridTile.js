import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity onPress={props?.onSelect} style={styles?.gridItem}>
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: props?.color, height: "100%" },
        }}
      >
        <Text style={styles.title}>{props?.title}</Text>
      </View>
    </TouchableOpacity>
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
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
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
