import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform?.OS === "android" ? "white" : Colors.primary}
    />
  );
};

const s = StyleSheet.create({});

export default CustomHeaderButton;
