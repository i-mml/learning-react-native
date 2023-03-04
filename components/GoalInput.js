import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ setGoals, goals, visible, setVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContaienr}>
        <TextInput
          placeholder="Course Goal"
          style={styles.courseInput}
          onChangeText={(enteredText) => setEnteredGoal(enteredText)}
          value={enteredGoal}
        />
        <View style={styles?.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              color="green"
              onPress={() => {
                setEnteredGoal("");
                setGoals([...goals, enteredGoal]);
                setVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContaienr: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  courseInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
});

export default GoalInput;
