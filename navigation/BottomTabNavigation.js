import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProductNavigation from "./ProductNavigation";
import UserProductNavigation from "./UserProductNavigation";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createMaterialBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Stack.Navigator
      activeColor="#FFF"
      inactiveColor="#ADD8E6"
    
    >
      <Stack.Screen
        name="Product"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          
        }}
      />

      <Stack.Screen
        name="User"
        component={UserProductNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
