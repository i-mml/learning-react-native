import React from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = ({ itemData, onViewDetail, onAddToCart }) => {
  console.log(itemData?.item?.imageUrl);

  return (
    <View style={s.product}>
      <View style={s.imageContainer}>
        <Image
          source={{
            uri: itemData?.item?.imageUrl,
          }}
          style={s.image}
        />
      </View>

      <View style={s.details}>
        <Text style={s.title}>{itemData?.item?.title}</Text>
        <Text style={s.price}>${itemData?.item?.price?.toFixed(2)}</Text>
      </View>

      <View style={s.actions}>
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={onViewDetail}
        />
        <Button color={Colors.primary} title="To Cart" onPress={onAddToCart} />
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
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#8888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 15,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

export default ProductItem;
