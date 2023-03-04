import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles?.goalItem}>
        <Text style={{ color: "#fff" }}>{props?.title?.item}</Text>
      </View>
    </TouchableOpacity>
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
