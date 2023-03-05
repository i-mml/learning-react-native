import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props?.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.scondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: 50,
  },
  number: {
    color: Colors.scondary,
    fontSize: 22,
  },
});
export default NumberContainer;
