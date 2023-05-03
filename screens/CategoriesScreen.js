import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData?.item?.title}
        color={itemData?.item?.color}
        onSelect={() => {
          // when we want to go to the current screen we use navigation.push("ROUTE_NAME")
          props?.navigation.navigate("CategoryMeals", {
            catId: itemData?.item?.id,
          });
        }}
      />
    );
  };

  useEffect(() => {
    props?.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Favorite"
              iconName="menu"
              onPress={() => props.navigation.toggleDrawer()}
            />
          </HeaderButtons>
        );
      },
    });
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        renderItem={renderGridItem}
        data={CATEGORIES}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    marginBottom: 60,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
