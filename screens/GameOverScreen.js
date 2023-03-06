import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, restartGame } = props;
  return (
    <View style={styles?.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles?.text}>
        <Text>Number of rounds: {guessRounds}</Text>
      </View>
      <View style={styles?.text}>
        <Text>Number was: {userNumber}</Text>
      </View>
      <View style={styles?.button}>
        <Button title="NEW GAME" onPress={() => restartGame()} color="black"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
    height: "75%",
    justifyContent: "center",
  },
  text: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default GameOverScreen;
