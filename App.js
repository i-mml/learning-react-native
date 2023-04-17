import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
// import { AppLoading } from "expo-app-loadi`ng";
import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "iran-sans": require("./assets/fonts/iranSans/ttf/IRANSansWeb(FaNum)_Medium.ttf"),
    "iran-sans-bold": require("./assets/fonts/iranSans/ttf/IRANSansWeb(FaNum)_Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  screen: {
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
