import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Button, ActivityIndicator, Text, View } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import * as ProductActions from "../../store/actions/products";

const ProductOverViewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadProducts = useCallback(async () => {
    setError(null);
    console.log("data fetch");

    try {
      await dispatch(ProductActions.fetchData());
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("willFocus", loadProducts);
    return () => {
      unsubscribe.remove();
    };
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

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

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.Blue} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.Blue} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NO ITEM FOUND</Text>
    </View>;
  }

  return (
    <FlatList
      onRefresh={loadProducts}
      refreshing={isLoading}
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
