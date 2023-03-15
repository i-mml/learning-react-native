import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/Colors';

const Header = ({ title = "" }) => {
  return (
    <View style={styles?.header}>
      <Text style={styles?.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    borderBottomWidth: 1,
    borderBottomColor: colors?.primary,
    paddingVertical: 18,
    backgroundColor: Platform.OS === "android" ? colors?.primary : "white",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "black" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  text: {
    color: Platform.OS === "ios" ? "black" : "#fff",
    textAlign: "center",
    fontSize: 19,
  },
});
export default Header;
