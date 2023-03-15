import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/Colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText?.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    setEnteredValue("");
    Keyboard?.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles?.summaryContainer}>
        <BodyText>You Selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          title="START GAME"
          onClick={() => props?.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard?.dismiss()}>
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
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles?.buttonContaienr}>
                <View
                  style={{
                    width: buttonWidth,
                  }}
                >
                  <Button
                    title="Reset"
                    onPress={resetInputHandler}
                    color={colors.scondary}
                  />
                </View>
                <View
                  style={{
                    width: buttonWidth,
                  }}
                >
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={colors.primary}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    fontFamily: "iran-sans-bold",
  },
  buttonContaienr: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  inputContaienr: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  button: {
    // width: 95,
    width: Dimensions.get("window").width / 4,
  },
  input: {
    width: "70%",
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default StartGameScreen;
