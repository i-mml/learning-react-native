import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

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
      <View style={styles.goalsListContaier}>
        {goals?.length > 0 ? (
          goals?.map((item) => (
            <View key={item} style={styles?.goalItem}>
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))
        ) : (
          <Text style={styles?.notFound}>There is no Goal to show!</Text>
        )}
      </View>
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
    justifyContent: "center",
  },
  goalItem: {
    backgroundColor: "#58a7e6",
    marginVertical: 5,
    padding: 10,
    color: "#fff",
    borderRadius: 12,
    fontSize: 17,
  },
  notFound: {
    marginTop: 10,
    color: "#999",
    textAlign: "center",
  },
});
