import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import defaultStyles from '../constants/default-styles';

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

const renderListItem = (listLength, itemData) => (
  <View style={styles.listIem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess?.toString()]);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
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
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber?.toString(),
      ...curPastGuesses,
    ]);
  };

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses?.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={defaultStyles.title}>Opponent's Guess</Text>
        <View style={styles.controls}>
          <MainButton
            title={<Ionicons name="md-remove" size={24} color="white" />}
            onClick={() => nextGuessHandler("lower")}
          />
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton
            title={<Ionicons name="md-add" size={24} color="white" />}
            onClick={() => nextGuessHandler("higher")}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item}
            data={pastGuesses}
            renderItem={(item) => renderListItem(pastGuesses?.length, item)}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContaienr}>
        <MainButton
          title={<Ionicons name="md-remove" size={24} color="white" />}
          onClick={() => nextGuessHandler("lower")}
        />
        <MainButton
          title={<Ionicons name="md-add" size={24} color="white" />}
          onClick={() => nextGuessHandler("higher")}
        />
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses?.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={(item) => renderListItem(pastGuesses?.length, item)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: "90%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  listContainer: {
    width: Dimensions.get("window").width > 500 ? "60%" : "80%",
    // for making scrollable list
    flex: 1,
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listIem: {
    width: "60%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#feeeee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default GameScreen;
