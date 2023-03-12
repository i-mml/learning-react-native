import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/Colors';
import defaultStyles from '../constants/default-styles';

const GameOverScreen = (props) => {
  const { guessRounds, userNumber, restartGame } = props;
  return (
    <View style={styles?.screen}>
      <Text style={defaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require("../assets/picture1.jpg")}
          source={{
            uri: "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1398/06/03/1398060311074941218199214.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Your phone needed{" "}
        <Text style={styles.guessRound}>{props.guessRounds}</Text> round to
        guess the number
      </BodyText>
      <View style={styles?.text}>
        <Text>Number of rounds: {guessRounds}</Text>
      </View>
      <View style={styles?.text}>
        <Text>Number was: {userNumber}</Text>
      </View>
      <View style={styles?.button}>
        <MainButton title="NEW GAME" onClick={() => restartGame()} color="black" />
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
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginVertical: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  text: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
  guessRound: {
    color: Colors.scondary,
  },
});

export default GameOverScreen;
