import React from "react";
import { View, Button, FlatList, Alert, Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import * as productAction from "../../store/actions/products";

const UserProduct = (props) => {
  const UserProduct = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const alertDialogHandler = (id) => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => dispatch(productAction.deleteProduct(id)),
      },
    ]);
  };

  if (UserProduct.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>No product found, please add your product..</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={UserProduct}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("EditProductScreen", {
              itemId: itemData.item.id,
            });
            console.log(">>>> pId = ", itemData.item.id);
          }}
        >
          <Button
            color={Colors.Red}
            title="Edit"
            onPress={() => {
              props.navigation.navigate("EditProductScreen", {
                itemId: itemData.item.id,
              });

              console.log(">>>> pId = ", itemData.item.id);
              // editHandler(itemData.item.id);
            }}
          ></Button>
          <Button
            color={Colors.Red}
            title="Delete"
            onPress={alertDialogHandler.bind(this, itemData.item.id)}
          ></Button>
        </ProductItem>
      )}
    />
  );
};

export default UserProduct;
