import React from "react";
import { StyleSheet, View, Text, Button, FlatList, Alert } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/order";

const CartScreen = (props) => {
  const cartTotalItem = useSelector((state) => state.carts.totalAmounts);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.carts.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.carts.items[key].productTitle,
        productPrice: state.carts.items[key].productPrice,
        quantity: state.carts.items[key].quantity,
        sum: state.carts.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  var value = cartTotalItem;
  var values = Math.round(value.toFixed(2) * 100);
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total : <Text style={styles.amount}>$ {values / 100}</Text>
        </Text>
        <Button
          color={Colors.DarkBlue}
          title="Order Now"
          disabled={cartItems.length === 0}
          deletable
          onPress={() => {
            dispatch(orderActions.addOrder(cartItems, cartTotalItem));
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 20,
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Items
      </Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            remove={() => {
              alertDialogHandler();
              dispatch(cartActions.removeCart(itemData.item.productId));
            }}
          />
        )}
      />
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
    color: Colors.Red,
  },
});

export default CartScreen;