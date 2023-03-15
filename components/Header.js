import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/Colors';

const Header = ({ title = "" }) => {
  return (
    <View
      style={{
        ...styles?.headerBase,
        // ...(Platform.OS === "ios" ? styles?.headerIos : styles?.headerAndroid),
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles?.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    paddingVertical: 18,
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "black",
  },
  headerAndroid: {
    backgroundColor: colors?.primary,
    borderBottomWidth: 0,
  },
  text: {
    color: Platform.OS === "ios" ? "black" : "#fff",
    textAlign: "center",
    fontSize: 19,
  },
});
export default Header;
