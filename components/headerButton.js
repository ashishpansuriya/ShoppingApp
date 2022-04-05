import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const headerButton = props => {
    return (
        <Ionicons
              name="cart"
              size={42}
              color={Platform.OS === "android" ? Colors.Orange : Colors.Red}
              onPress={() => route.navigate("cartScreen")}
            />
    );
};


export default headerButton;