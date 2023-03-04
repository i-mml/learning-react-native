import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles?.title}>The Game Screen</Text>
      <View style={styles?.inputContaienr}>
        <Text>Select a Number</Text>
        <TextInput placeholder="Guess a Number" />
        <View style={styles?.buttonContaienr}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContaienr: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContaienr: {
    width: "80%",
    maxWidth: 300,
    alignItems: "center",
  },
});

export default StartGameScreen;
