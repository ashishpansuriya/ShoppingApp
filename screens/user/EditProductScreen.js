import React, { useCallback, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";

const EditProductScreen = (props) => {
  const params = props.route.params;
  const pId = params.pId;

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.pId === pId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState(editedProduct ? editedProduct.desc : "");

  const submitHandler = useCallback(() => {
    // props.navigation.navigate("EditProductScreen", {
    //   params: pId,
    // });

    console.log("Submitted");
  });
  

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
            value={desc}
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
