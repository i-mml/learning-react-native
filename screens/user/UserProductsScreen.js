import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { View } from "react-native";

import ProductItem from "../../components/shop/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import { delteProduct } from "../../redux/actions/products";

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state?.products?.userProducts);
  const dispatch = useDispatch();

  const onViewDetail = (id) =>
    navigation?.navigate("editProductScreen", {
      productId: id,
    });

  const onDelete = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
            onPress={() => navigation?.navigate("editProductScreen")}
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
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          itemData={itemData}
          onViewDetail={() => onViewDetail(itemData?.item?.id)}
        >
          <Button
            color={Colors.primary}
            title="Edit"
            onPress={() => onViewDetail(itemData?.item?.id)}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => dispatch(delteProduct(itemData?.item?.id))}
          />
        </ProductItem>
      )}
    />
  );
};
const s = StyleSheet.create({});
export default UserProductsScreen;
