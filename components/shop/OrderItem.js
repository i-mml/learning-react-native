import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { View } from "react-native";

import Colors from "../../constants/Colors";

const OrderItem = (props) => {
  console.log(props);

  return (
    <View style={s.orderItem}>
      <View style={s.summary}>
        <Text style={s.totalAmount}>${props?.amount.toFixed(2)}</Text>
        <Text style={s.date}>{props?.date}</Text>
      </View>

      <Button color={Colors.primary} title="Show Details" />
    </View>
  );
};

const s = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: "iran-sans-bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: "iran-sans",
    color: "#888",
  },
});

export default OrderItem;
