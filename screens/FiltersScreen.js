import React, { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/actions";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filtersContaier}>
      <Text>{props?.label}</Text>
      <Switch
        value={props?.state}
        // onValueChange={(newValue) => setIsGlutenFree(newValue)}
        onValueChange={props?.onChangeFunc}
        thumbColor={Platform?.OS === "android" ? Colors.primaryColor : ""}
        trackColor={{ true: Colors.primaryColor }}
      />
    </View>
  );
};

const FiltersScreen = ({ route, navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  let depths = [isGlutenFree, isLactoseFree, isVegan, isVegetarian];

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [depths]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="save" onPress={saveFilters} />
          </HeaderButtons>
        );
      },
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChangeFunc={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChangeFunc={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChangeFunc={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChangeFunc={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "iran-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  filtersContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
export default FiltersScreen;
