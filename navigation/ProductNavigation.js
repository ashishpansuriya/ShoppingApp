import { React } from 'react';
import { Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import Colors from '../constants/Colors';
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/shop/CartScreen";

const Stack = createNativeStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductOverViewScreen"
        component={ProductOverViewScreen}
        options={({ navigation }) => ({
          title: "All Products",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : Colors.White,
          },
          headerTintColor:
            Platform.OS === "android" ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },

          headerRight: () => 

            <Ionicons
              name="cart"
              size={35}
              color={Platform.OS === "android" ? Colors.Orange : Colors.Red}
              onPress={() => navigation.navigate('cartScreen')}
            />
          ,
        })}
      />

      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : Colors.White,
          },
          headerTintColor:
            Platform.OS === "android" ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        })}
      />

      <Stack.Screen
        name="cartScreen"
        component={CartScreen}
        options={({ route }) => ({
          title: "Cart",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : Colors.White,
          },
          headerTintColor:
            Platform.OS === "android" ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        })}
      />
    </Stack.Navigator>
  );
};