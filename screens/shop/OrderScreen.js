import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Colors from "../../constants/Colors";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          totalAmount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

let TouchableComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version > 23) {
  TouchableComp = TouchableNativeFeedback;
}

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <TouchableComp>
      <View style={styles.orderItem}>
        <View style={styles.summary}>
          <Text
            style={{
              fontSize: 18,
              paddingHorizontal: 10,
              fontStyle: "italic",
              color: Colors.Black,
            }}
          >
            {props.totalAmount.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingHorizontal: 10,
              color: Colors.Black,
            }}
          >
            {" "}
            {props.date}
          </Text>
        </View>
        <View
          style={{
            marginVertical: 8,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          
          <Button
            color={Colors.Red}
            title={showDetails ? "Hide Details" : "View Details"}
            onPress={() => {
              setShowDetails((prevState) => !prevState);
            }}
          ></Button>
          {showDetails && (
            <View style={styles.detailsItem}>
              {props.items.map((cartItem) => (
                <CartItem
                  quantity={cartItem.quantity}
                  amount={cartItem.sum}
                  title={cartItem.productTitle}
                />
              ))}
            </View>
          )}
        </View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 11,
    overflow: "hidden",
    borderRadius: 11,
    marginTop: 10,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },
  detailsItem: {
    width: "100%",
  },
});

export default OrderScreen;
