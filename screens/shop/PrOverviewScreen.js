import React from "react";
import { Button, FlatList } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { addToCart } from "../../redux/actions/cart";
import { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { Platform } from "react-native";
import Colors from "../../constants/Colors";

const PrOverviewScreen = ({ navigation }) => {
  const productsList = useSelector(
    (state) => state?.products?.availableProducts
  );
  const dispatch = useDispatch();

  const onViewDetail = (itemData) =>
    navigation?.navigate("ProductsDetail", {
      productId: itemData?.item?.id,
      productTitle: itemData?.item?.title,
    });

  const onAddToCart = (itemData) => {
    dispatch(addToCart(itemData?.item));
  };

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
      <FlatList
        data={productsList}
        renderItem={(itemData) => (
          <ProductItem
            itemData={itemData}
            onViewDetail={() => onViewDetail(itemData)}
          >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={onViewDetail}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => onAddToCart(itemData)}
            />
          </ProductItem>
        )}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default PrOverviewScreen;
