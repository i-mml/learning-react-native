import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import GoalInput from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState(["what he hell"]);

  return (
    <View style={styles.container}>
      <GoalInput setGoals={setGoals} goals={goals} />
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
