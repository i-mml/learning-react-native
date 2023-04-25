import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  // routes :
  {
    Categories: CategoriesScreen,
    // another way to identify a route
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  // options and configs :
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);
// we want to have two tab (all meals , favorite meals)
// const MealsFavTabNavigaor = createBottomTabNavigator({
//   Meals: MealsNavigator,
//   Favorites: FavoritesScreen,
// });

export default createAppContainer(MealsNavigator);
