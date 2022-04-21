import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserProduct from "../screens/user/UserProduct";
import EditProductScreen from "../screens/user/EditProductScreen";
const Stack = createNativeStackNavigator();

export default function UserProductNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductOverViewScreen"
        component={UserProduct}
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

          headerRight: () => (
            <Ionicons
              name="create-outline"
              size={35}
              color={Platform.OS === "android" ? Colors.Orange : Colors.Red}
              onPress={() => navigation.navigate("ProductOverViewScreen")}
            />
          ),
        })}
      />

      <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={({ navigation, route }) => ({
          title: route.params.pId ? "Edit Screen" : "Add Screen",
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

          headerRight: () => (
            <Ionicons
              name="checkmark-done-circle-outline"
              size={35}
              color={Platform.OS === "android" ? Colors.Orange : Colors.Red}
              onPress={() => navigation.navigate("ProductOverViewScreen")}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
