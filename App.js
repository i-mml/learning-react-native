import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { GoalItem } from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([
    "amir",
    "kabir",
    "saghir",
    "reza",
    "kazem",
    "masoud",
    "amir2",
    "kabir2",
    "saghir2",
    "reza2",
    "kazem2",
    "masoud2",
    "amir3",
    "kabir3",
    "saghir3",
    "reza3",
    "kazem3",
    "masoud3",
  ]);

  return (
    <View style={styles.container}>
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

      {goals?.length > 0 ? (
        <FlatList
          style={styles.goalsListContaier}
          data={goals}
          renderItem={(itemData) => <GoalItem title={itemData} />}
        />
      ) : (
        <Text style={styles?.notFound}>There is no Goal to show!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "10%",
    paddingTop: 50,
  },
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
  goalsListContaier: {
    marginTop: 10,
  },

  notFound: {
    marginTop: 10,
    color: "#999",
    textAlign: "center",
  },
});
