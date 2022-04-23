import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import * as productsAction from "../../store/actions/products";
const AddProductScreen = (props) => {
  const { navigation } = props;

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    if(title ==="" && description === "" && imageUrl ==="" && price ===""){
      navigation.goBack();
      return;
    }
    dispatch(
      productsAction.createProduct(title, description, imageUrl, +price)
    );
    navigation.goBack();
  }, [dispatch, title, description, imageUrl, price]);

  useEffect(() => {
    navigation.setParams({ save: submitHandler });
    
  }, [submitHandler]);

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

        <View style={styles.formLable}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>

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

export default AddProductScreen;
