// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from "../constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import PrOverviewScreen from "../screens/shop/PrOverviewScreen";
import ProductDetailScreen from "../screens/shop/productDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserProductsScreen from "../screens/user/UserProductsScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform?.OS === "android" ? Colors.primary : "white",
  },
  headerTitleStyle: {
    fontSize: 25,
    fontFamily: "iran-sans-bold",
  },
  // fot the IOS back title
  headerBackTitleStyle: {
    fontFamily: "iran-sans",
  },
  headerTintColor: Platform?.OS === "android" ? "white" : Colors.primary,
};

// const tabScreenConfigs = {
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
//   },

//   headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
// };

// const MyTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View
//       // these styles are for createBottomTabNavigator , not for material bottom navigator
//       style={{
//         width: "100%",
//         position: "absolute",
//         bottom: 0,
//         flexDirection: "row",
//         // height: 30,
//         backgroundColor: "white",
//         paddingVertical: 5,
//         borderTopWidth: 3,
//         borderTopColor: "#eee",
//       }}
//     >
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];

//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true });
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: "tabLongPress",
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//               width: "50%",
//               backgroundColor:
//                 // isFocused && Platform.OS === "android"
//                 //   ? Colors.primaryColor
//                 //   :
//                 "white",
//             }}
//             key={index}
//           >
//             <View style={{ alignItems: "center", justifyContent: "center" }}>
//               <Text>
//                 <Ionicons
//                   name={options?.tabBarIcon}
//                   style={{
//                     color:
//                       isFocused && Platform.OS === "android"
//                         ? Colors.accentColor
//                         : "#999",
//                   }}
//                   size={25}
//                 />
//               </Text>
//             </View>
//             <Text
//               style={{
//                 color:
//                   isFocused && Platform.OS === "android"
//                     ? Colors.accentColor
//                     : "#999",
//                 textAlign: "center",
//               }}
//             >
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

function ShopNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen
        name="ProductsOverView"
        component={PrOverviewScreen}
        options={{
          headerTitle: "All Products",
        }}
      />
      <Stack.Screen name="ProductsDetail" component={ProductDetailScreen} />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: "Cart",
        }}
      />
    </Stack.Navigator>
  );
}

function AdminNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultStackNavigatorOptions}>
      <Stack.Screen
        name="userProductScreen"
        component={UserProductsScreen}
        options={{
          headerTitle: "User Products",
        }}
      />
      <Stack.Screen name="ProductsDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

// function MealsFavTabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <MyTabBar {...props} />}
//       shifting
//       activeColor={"#fff"}
//       inactiveColor="#999"
//       barStyle={{ backgroundColor: Colors?.accentColor }}
//     >
//       <Tab.Screen
//         name="CategoriesNested"
//         component={CateggoriesNavigator}
//         options={{
//           ...tabScreenConfigs,
//           tabBarIcon: "menu",
//           headerShown: false,
//           tabBarLabel:
//             Platform?.OS === "android" ? (
//               <Text style={{ fontFamily: "iran-sans-bold" }}>Categories</Text>
//             ) : (
//               "Categories"
//             ),
//         }}
//       />
//       <Tab.Screen
//         name="FavoritesNested"
//         component={FavoritesNavigator}
//         options={{
//           ...tabScreenConfigs,
//           tabBarIcon: "bookmarks-outline",
//           headerShown: false,
//           tabBarLabel:
//             Platform?.OS === "android" ? (
//               <Text style={{ fontFamily: "iran-sans-bold" }}>Favorites</Text>
//             ) : (
//               "Favorites"
//             ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ShopNavigator">
        <Drawer.Screen
          name="Shop"
          component={ShopNavigator}
          options={{
            ...defaultStackNavigatorOptions,
            headerShown: false,
            drawerIcon: (drawerData) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={drawerData?.tintColor}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            ...defaultStackNavigatorOptions,
            headerShown: false,
            drawerIcon: (drawerData) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-person" : "ios-person"}
                size={23}
                color={drawerData?.tintColor}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            ...defaultStackNavigatorOptions,
            drawerIcon: (drawerData) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={drawerData?.tintColor}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
