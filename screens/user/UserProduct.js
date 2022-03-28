import React from "react";
import { StyleSheet, View, Text } from "react-native";

const UserProduct = props => {
    return (
        <View style={styles.container}>
            <Text>
            UserProduct
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

export default UserProduct;