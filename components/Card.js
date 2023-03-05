import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles?.card, ...props?.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "blue",
    elevation: 3,
    padding: 20,
    borderRadius: 8,
  },
});
export default Card;
