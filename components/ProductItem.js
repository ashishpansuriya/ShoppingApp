import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";


const ProductItem = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 23) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <TouchableComp onPress={props.onViewDetail} useForeground>
      <View style={styles.container}>
        <ImageBackground
          style={{ justifyContent: "flex-end", width: "100%", height: 180 }}
          source={{ uri: props.image }}
        ></ImageBackground>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 18, color: Colors.Black }}>
              {props.title}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.Black }}>
              $ {parseFloat(props.price).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

          {props.children}
           
          </View>
        </View>
      </View>
    </TouchableComp>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 11,
    overflow: "hidden",
    borderRadius: 11,
    backgroundColor: "white",
    height: 250,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
  },
});

export default ProductItem;
