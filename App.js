import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    "iran-sans": require("./assets/fonts/iranSans/ttf"),
    "iran-sans-bold": require("./assets/fonts/iranSans/ttf/IRANSansWeb(FaNum)_Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (number) => {
    setUserNumber(number);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        restartGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="THIS IS HEADER" />
      {content}
      {/* <GameScreen setCurrentScreen={setCurrentScreen} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
