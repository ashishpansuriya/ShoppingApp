import StartupScreen from "../screens/StartupScreen";
import MainNAvigation from "./MainNAvigation";
import { React } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function StartNavigation() {
  return (
    <Stack.Navigator options ={{headerShown : false}} >
      <Stack.Screen
        name="StartupScreen"
        component={StartupScreen}
        options={{
          headerShown: false,
        }}
        
      />

      <Stack.Screen
        name="MainNAvigation"
        component={MainNAvigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}