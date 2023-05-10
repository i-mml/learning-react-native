import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const EditProductScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
            onPress={() => navigation?.navigate("CartScreen")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => navigation?.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View>
      <Text>The Edit Product Screen!</Text>
    </View>
  );
};

const s = StyleSheet.create({});

export default EditProductScreen;
