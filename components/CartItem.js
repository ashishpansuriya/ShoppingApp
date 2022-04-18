import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.itemData}>
          <Text style={styles.quantity}>{props.quantity} </Text>
          <Text style={styles.title}>{props.title}</Text>
        </Text>
        <View style={styles.itemData}>
          <Text style={styles.amount}>$ {props.amount}</Text>
          {props.deletable && (
            <TouchableOpacity
              onPress={props.remove}
              style={styles.deleteButton}
            >
              <Ionicons name="ios-trash" size={23} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View
        style={{
          borderColor: "grey",
          borderWidth: 0.5,
          marginBottom: 5,
          marginLeft: 10,
          marginRight: 10,
          width: "100%",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemData: {
    alignItems: "center",
    flexDirection: "row",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },

  title: {
    fontSize: 16,
    width: "20%",
  },

  amount: {
    fontSize: 16,
  },

  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
