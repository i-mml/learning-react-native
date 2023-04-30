// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab =
  Platform?.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const tabScreenConfigs = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },

  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      // these styles are for createBottomTabNavigator , not for material bottom navigator
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        // height: 30,
        backgroundColor: "white",
        paddingVertical: 5,
        borderTopWidth: 3,
        borderTopColor: "#eee",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              width: "50%",
              backgroundColor:
                // isFocused && Platform.OS === "android"
                //   ? Colors.primaryColor
                //   :
                "white",
            }}
            key={index}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text>
                <Ionicons
                  name={options?.tabBarIcon}
                  style={{
                    color:
                      isFocused && Platform.OS === "android"
                        ? Colors.accentColor
                        : "#999",
                  }}
                  size={25}
                />
              </Text>
            </View>
            <Text
              style={{
                color:
                  isFocused && Platform.OS === "android"
                    ? Colors.accentColor
                    : "#999",
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CateggoriesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default function MealsFavTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        shifting
        activeColor={"#fff"}
        inactiveColor="#999"
        barStyle={{ backgroundColor: Colors?.accentColor }}
      >
        <Tab.Screen
          name="CategoriesNested"
          component={CateggoriesNavigator}
          options={{ ...tabScreenConfigs, tabBarIcon: "menu" }}
        />
        <Tab.Screen
          name="FavoritesNested"
          component={FavoritesNavigator}
          options={{ ...tabScreenConfigs, tabBarIcon: "bookmark-outline" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const MealsNavigator = createNativeStackNavigator(
//   // routes :
//   {
//     Categories: CategoriesScreen,
//     // another way to identify a route
//     CategoryMeals: {
//       screen: CategoryMealsScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   // options and configs :
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor:
//           Platform.OS === "android" ? Colors.primaryColor : "white",
//       },
//       headerTintColor:
//         Platform.OS === "android" ? "white" : Colors.primaryColor,
//     },
//   }
// );
// // we want to have two tab (all meals , favorite meals)
// const MealsFavTabNavigaor = createBottomTabNavigator({
//   Meals: MealsNavigator,
//   Favorites: FavoritesScreen,
// });

// export default NavigationContainer(MealsFavTabNavigaor);
