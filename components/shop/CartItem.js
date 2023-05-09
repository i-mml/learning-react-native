import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const CartItem = ({ cartItemData, onRemove }) => {
  return (
    <View style={s.cartItem}>
      <View style={s.itemData}>
        <Image
          source={{
            uri: cartItemData?.productImage,
          }}
          style={s.image}
        />
        <Text style={s.quantity}>{cartItemData?.quantity} </Text>
        <Text style={s.mainText}>{cartItemData?.productTitle}</Text>
      </View>
      <View style={s.itemData}>
        <Text style={s.mainText}>${cartItemData?.productPrice.toFixed(2)}</Text>
        <TouchableOpacity onPress={onRemove} style={s.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 13,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "iran-sans",
    color: "#888",
    fontSize: 18,
  },
  mainText: {
    fontFamily: "iran-sans-bold",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 2,
    borderRadius: 150,
  },
});
export default CartItem;
