import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./navigation/ShopNavigator";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useCallback } from "react";
import "react-native-gesture-handler";

// for improve performance in navigations
enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    "iran-sans": require("./assets/fonts/iranSans/ttf/IRANSansWeb(FaNum)_Medium.ttf"),
    "iran-sans-bold": require("./assets/fonts/iranSans/ttf/IRANSansWeb(FaNum)_Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Wait to fetch fonts</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: "10%",
    paddingTop: 50,
  },
});
