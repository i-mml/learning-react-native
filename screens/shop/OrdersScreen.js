import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = () => {
  const orders = useSelector((state) => state?.orders);

  console.log("orders", orders);

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderItem amount={item?.totalAmount} date={item?.readableDate} />
        )}
      />
    </View>
  );
};

const s = StyleSheet.create({});

export default OrdersScreen;
