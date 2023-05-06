import React, { useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = ({ route, navigation }) => {
  const productData = route?.params;
  const selectedProduct = useSelector((state) =>
    state?.products?.availableProducts?.find(
      (item) => item?.id == productData?.productId
    )
  );

  useEffect(() => {
    navigation.setOptions({ title: productData?.productTitle });
  }, []);

  return (
    <ScrollView>
      <Image
        style={s.image}
        source={{
          uri: selectedProduct?.imageUrl,
        }}
      />
      <View style={s.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={s.price}> ${selectedProduct?.price?.toFixed(2)}</Text>
      <Text style={s.description}> {selectedProduct?.description}</Text>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailScreen;
