import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../redux/actions/cart";

const PrOverviewScreen = ({ navigation }) => {
  const productsList = useSelector(
    (state) => state?.products?.availableProducts
  );

  const dispatch = useDispatch();

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
              dispatch(addToCart(itemData?.item));
            }}
          />
        )}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default PrOverviewScreen;
