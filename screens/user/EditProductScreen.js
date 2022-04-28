
import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import * as productsAction from "../../store/actions/products";
import Colors from "../../constants/Colors";

const EditProductScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { itemId } = route.params;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === itemId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      await dispatch(
        productsAction.updateProduct(itemId, title, description, imageUrl)
      );
      navigation.goBack();
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(true);
  }, [dispatch, itemId, title, description, imageUrl]);

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred !", error, [{ text: "Okay" }]);
    }

    navigation.setParams({ editSave: submitHandler });
  }, [submitHandler, error]);

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

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formLable}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formLable}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formLable}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formLable}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDesc(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  form: {
    margin: 20,
  },
  formLable: {
    width: "100%",
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
