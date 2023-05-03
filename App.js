import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductsOverviewScreen from "./screens/shop/ProductsOverviewScreen";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <Text>Hold on</Text>
      </View>
      <ProductsOverviewScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: "10%",
    paddingTop: 50,
  },
});
