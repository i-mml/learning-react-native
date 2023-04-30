import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ dataList, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item?.title}
        duration={itemData.item?.duration}
        complexity={itemData.item?.complexity}
        affordablitiy={itemData.item?.affordablitiy}
        image={itemData.item?.imageUrl}
        onSelectMeal={() =>
          navigation.navigate("MealDetail", {
            mealId: itemData.item?.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
