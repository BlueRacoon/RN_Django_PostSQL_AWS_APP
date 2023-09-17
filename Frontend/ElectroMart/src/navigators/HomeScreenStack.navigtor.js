import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import FavoriteItemsScreen from "../screens/FavoriteItemsScreen";
import { Ionicons } from "@expo/vector-icons";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#4B5563",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteItemsScreen}
        options={{ tabBarLabel: "Favorite" }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: "Cart" }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ tabBarLabel: "Orders" }}
      />
    </Tab.Navigator>
  );
};
