import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewsScreen = () => {
  const productsList = useSelector(
    (state) => state?.products?.availableProducts
  );

  return (
    <View>
      <FlatList
        data={productsList}
        renderItem={(itemData) => <Text>{itemData?.item?.title}</Text>}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default ProductsOverviewsScreen;
