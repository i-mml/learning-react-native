import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const PrOverviewScreen = () => {
  const productsList = useSelector(
    (state) => state?.products?.availableProducts
  );

  return (
    <View>
      <FlatList
        data={productsList}
        renderItem={(itemData) => (
          <ProductItem
            itemData={itemData}
            onViewDetail={() => {
              console.log("onViewDetail");
              alert("onViewDetail");
            }}
            onAddToCart={() => {
              console.log("onAddToCart");
              alert("onAddToCart");
            }}
          />
        )}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default PrOverviewScreen;
