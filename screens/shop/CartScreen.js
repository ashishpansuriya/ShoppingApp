import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const CartScreen = (props) => {
  const cartTotalItem = useSelector((state) => state.carts.totalAmounts);

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :{" "}
          <Text  style={styles.amount}>$ {cartTotalItem}</Text>
        </Text>
        <Button title="Order Now" />
      </View>
      <View>
        <Text>CART ITEMS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontSize: 20,
  },
  amount: {
    color: Colors.Blue,
    
  },
});

export default CartScreen;