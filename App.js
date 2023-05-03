import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {
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
