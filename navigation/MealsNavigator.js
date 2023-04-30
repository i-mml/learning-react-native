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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        // height: 30,
        backgroundColor: "white",
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
                isFocused && Platform.OS === "android"
                  ? Colors.primaryColor
                  : "white",
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
                        ? "white"
                        : Colors.primaryColor,
                  }}
                  size={25}
                />
              </Text>
            </View>
            <Text
              style={{
                color:
                  isFocused && Platform.OS === "android"
                    ? "white"
                    : Colors.primaryColor,
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

const MealsNavigator2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "white",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default function MealsFavTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="CategoriesNested"
          component={MealsNavigator2}
          options={{
            headerShown: false,
            tabBarIcon: "ios-restaurant",
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? Colors.primaryColor : "white",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primaryColor,
            tabBarIcon: "bookmark-outline",
          }}
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
