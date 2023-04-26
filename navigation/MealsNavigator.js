// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default function MealsFavTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="CategoriesNested"
          component={MealsNavigator2}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
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
