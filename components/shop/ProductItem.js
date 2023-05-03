import React from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

const ProductItem = ({ itemData }) => {
  console.log(itemData?.item?.imageUrl);

  return (
    <View style={s.product}>
      <Image
        source={{
          uri: itemData?.item?.imageUrl,
        }}
        style={s.image}
      />
      <Text>TITLE</Text>
      <Text>$PRICE</Text>
      <View style={s.image}>
        <Button title="View Details" />
        <Button title="To Cart" />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default ProductItem;
