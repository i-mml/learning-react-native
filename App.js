import { StyleSheet } from "react-native";
import ShopNavigator from "./navigation/ShopNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// for improve performance in navigations
enableScreens();

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
