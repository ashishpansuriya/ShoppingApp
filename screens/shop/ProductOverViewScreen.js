import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ProductOverViewScreen = props => {

    return (
        <View style={styles.container}>
            <Text>
                ProductDetailsScreen
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
        alignContent: 'center'
    },
});

export default ProductOverViewScreen;