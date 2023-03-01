import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = (props) => {
  return (
    <View style={styles?.goalItem}>
      <Text style={{ color: "#fff" }}>{props?.title?.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#58a7e6",
    marginVertical: 5,
    padding: 10,
    color: "#fff",
    borderRadius: 12,
    fontSize: 17,
  },
});
