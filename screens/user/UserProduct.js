import React from "react";
import { StyleSheet, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import * as productAction from "../../store/actions/products";

const UserProduct = (props) => {
  const UserProduct = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={UserProduct}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
        >
          <Button color={Colors.Red} title="Edit" onPress={() => {}}></Button>
          <Button
            color={Colors.Red}
            title="Delete"
            onPress={() => {
              dispatch(productAction.deleteProduct(itemData.item.id));
            }}
          ></Button>
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center'
      },
});

export default UserProduct;