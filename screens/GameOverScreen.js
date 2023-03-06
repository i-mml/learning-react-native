import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, restartGame } = props;
  return (
    <View style={styles?.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={() => restartGame()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameOverScreen;
