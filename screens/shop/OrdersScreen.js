import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

const OrdersScreen = () => {
  const orders = useSelector((state) => state?.orders);

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(itemData) => <Text>{itemData?.item?.totalAmount}</Text>}
      />
    </View>
  );
};

const s = StyleSheet.create({});

export default OrdersScreen;
