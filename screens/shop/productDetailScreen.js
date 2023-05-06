import React, { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";

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
      <Text>{selectedProduct?.title}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;
