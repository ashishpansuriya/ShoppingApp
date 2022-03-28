import React from "react";
import { StyleSheet, View, Text } from "react-native";

const EditProductScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
            EditProductScreen
            </Text>
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

export default EditProductScreen;