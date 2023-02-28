import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContaienr}>
        <TextInput placeholder="Course Gold" style={styles.courseInput} />
        <Button title="ADD" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContaienr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
});
