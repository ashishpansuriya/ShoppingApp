import React from "react";
import { FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductOverViewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onAddToCarts={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetailsScreen", {
              description: itemData.item.description,
              productTitle: itemData.item.title,
              productPrice: itemData.item.price,
              pId: itemData.item.id,
              image: itemData.item.imageUrl,
            });
          }}
        />
      )}
    />
  );
};

export default ProductOverViewScreen;