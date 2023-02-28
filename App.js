import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("I'm gonna be changed");
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Gold"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            marginBottom: 5,
          }}
        />
        <Button title="ADD" color="red"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
