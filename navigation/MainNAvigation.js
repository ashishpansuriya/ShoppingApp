import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import AuthScreen from "../screens/user/AuthScreen";

const Stack = createNativeStackNavigator();

export default function MainNAvigation() {
  return (
    <Stack.Navigator options ={{headerShown : false}} >
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
        
      />

      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
