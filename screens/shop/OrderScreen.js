import React from "react";
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
import Colors from "../../constants/Colors";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        // <Text
        //   style={{
        //     flex: 1,
        //     alignContent: "center",
        //     alignItems: "center",
        //     fontSize: 22,
        //   }}
        // >
        //   {itemData.item.totalAmount}
        // </Text>

        <ProductItem
          totalAmount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
        />
      )}
    />
  );
};

let TouchableComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version > 23) {
  TouchableComp = TouchableNativeFeedback;
}

const ProductItem = (props) => {
  return (
    <TouchableComp>
      <View style={styles.container}>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              justifyContent: "space-around",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: Colors.Black }}>
              {props.totalAmount}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.Black }}> {props.date}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              color={Colors.Red}
              title="View Details"
              onPress={props.onViewDetail}
            ></Button>
          </View>
        </View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
  },
});

export default OrderScreen;