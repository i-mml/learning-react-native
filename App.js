import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("I'm gonna be changed");
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>
       {text}
      </Text>
      <Button title="Change Text" onPress={() => setText("Haha you got me!")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  firstText: {
    color: "red",
  },
});
