import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const PrOverviewScreen = ({ navigation }) => {
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
            onViewDetail={() =>
              navigation?.navigate("ProductsDetail", {
                productId: itemData?.item?.id,
                productTitle: itemData?.item?.title,
              })
            }
            onAddToCart={() => {
              console.log("onAddToCart");
            }}
          />
        )}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default PrOverviewScreen;
