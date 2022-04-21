import React from "react";
import { FlatList, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductOverViewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectHandler = (
    description,
    productTitle,
    productPrice,
    pId,
    image
  ) => {

    props.navigation.navigate({
      name: "ProductDetailsScreen",
      params: {
        description: description,
        productTitle: productTitle,
        productPrice: productPrice,
        pId: pId,
        image: image,
      },
      merge: true,
    });

  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            selectHandler(
              itemData.item.description,
              itemData.item.title,
              itemData.item.price,
              itemData.item.id,
              itemData.item.imageUrl
            );
            // description: itemData.item.description,
            // productTitle: itemData.item.title,
            // productPrice: itemData.item.price,
            // pId: itemData.item.id,
            // image: itemData.item.imageUrl,
          }}
        >
          <Button
            color={Colors.Red}
            title="View Details"
            onPress={() => {
              selectHandler(
                itemData.item.description,
                itemData.item.title,
                itemData.item.price,
                itemData.item.id,
                itemData.item.imageUrl
              );
            }}
          ></Button>
          <Button
            color={Colors.Red}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductOverViewScreen;