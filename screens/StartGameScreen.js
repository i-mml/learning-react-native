import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/Colors';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles?.title}>The Game Screen</Text>
      <Card style={styles?.inputContaienr}>
        <Text>Select a Number</Text>
        <Input
          placeholder="Guess a Number"
          style={styles?.input}
          blurOnSubmit
          autoCapitilize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles?.buttonContaienr}>
          <View style={styles?.button}>
            <Button title="Reset" onPress={() => {}} color={colors.scondary} />
          </View>
          <View style={styles?.button}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
      </Card>
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
    marginTop: 10,
  },
  inputContaienr: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: 95,
  },
  input: {
    width: "70%",
    textAlign: "center",
  },
});

export default StartGameScreen;
