import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: colors?.primary,
    justifyContent: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 19,
  },
});
export default Header;
