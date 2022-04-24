import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserProduct from "../screens/user/UserProduct";
import EditProductScreen from "../screens/user/EditProductScreen";
import AddProductScreen from "../screens/user/AddProductScreen";
const Stack = createNativeStackNavigator();

export default function UserProductNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProduct"
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
              name="add-circle-outline"
              size={24}
              color={Platform.OS === "android" ? "gray" : Colors.Red}
              onPress={() => {
                navigation.navigate("AddProductScreen");
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={({ route }) => ({
          title: "Edit Screen",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : Colors.White,
          },
          headerTintColor:
            Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
          headerRight: () => (
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={Colors.Red}
              onPress={() => {
                route.params.editSave();
              }}
            />
          ),
        })}
      />

      {/* <Stack.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={({  route }) => ({
          title: "Edit Screen",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primaryColor : Colors.White,
          },
          headerTintColor:
            Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },

          headerRight: () => (
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={ Colors.Red}
              onPress={() => {
                // route.params.editSave();
              }}
            />
          ),
        })}
      /> */}

      <Stack.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={({ navigation, route }) => ({
          title: "Add Screen",
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
              name="bookmark-outline"
              size={24}
              color={Platform.OS === "android" ? "gray" : Colors.Red}
              onPress={() => {
                route.params.save();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
