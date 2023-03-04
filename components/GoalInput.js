import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ setGoals, goals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <View style={styles.inputContaienr}>
      <TextInput
        placeholder="Course Goal"
        style={styles.courseInput}
        onChangeText={(enteredText) => setEnteredGoal(enteredText)}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        color="green"
        onPress={() => {
          setEnteredGoal("");
          setGoals([...goals, enteredGoal]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContaienr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  courseInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    height: "100%",
    borderRadius: 10,
    marginRight: 5,
  },
});

export default GoalInput;
