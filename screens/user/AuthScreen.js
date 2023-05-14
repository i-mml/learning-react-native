import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import Colors from "../../constants/Colors";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state) => state?.auth?.isAuth);

  const dispatch = useDispatch();
  console.log(isAuth);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      dispatch(loginAction());
    }
  };

  return (
    <ScrollView style={s.screen}>
      <Text style={s.title}>
        Welcome to Shop , please login to see our products
      </Text>

      <TextInput
        style={s.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        secureTextEntry
        style={s.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
        textContentType="password"
      />
      <Button title="Login" onPress={handleLogin} color={Colors.primary} />
    </ScrollView>
  );
};

const s = StyleSheet.create({
  screen: {
    padding: 20,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    borderBottomColor: "#888",
    borderBottomWidth: 2,
    marginVertical: 20,
    height: 45,
    fontSize: 17,
  },
});
export default AuthScreen;
