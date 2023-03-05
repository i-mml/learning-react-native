import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props?.userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props?.userChoice) ||
      (direction === "higher" && currentGuess > props?.userChoice)
    ) {
      Alert.alert("Don't lie Dump", "You know that this is wrong....", [
        {
          text: "sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  useEffect(() => {
    if (currentGuess === props?.userChoice) {
    }
  }, []);

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContaienr}>
        <Button title="LOWER" onPress={() => nextGuessHandler("lower")} />
        <Button title="HIGHER" onPress={() => nextGuessHandler("higher")} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContaienr: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 200,
    maxWidth: "80%",
  },
});

export default GameScreen;
