import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
const UserProduct = (props) => {
  const UserProduct = useSelector((state) => state.product.UserProduct);
  return (
    <View style={styles.container}>
      <FlatList
        data={UserProduct}
        keyExtractor={(item) => item.id}
        renderItem={
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onAddToCarts={() => {}}
            onViewDetail={() => {}}
          />
        }
      />
    </View>
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