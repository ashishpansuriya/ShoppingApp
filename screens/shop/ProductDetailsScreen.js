import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

import { useSelector } from "react-redux";

const ProductDetailsScreen = props => {
    const params = props.route.params;
    const pId = params.pId;
    const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === pId));

    return (
        <ScrollView style={styles.container}>
            <Image style={{ justifyContent: 'flex-end', width: '100%', height: 300 }} source={{ uri: selectProduct.imageUrl }} />
            <View style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, marginVertical: 4, color: '#FFF' }}>{selectProduct.title}</Text>
                    <Text style={{ fontSize: 14, color: '#FFF' }} >$ {selectProduct.price.toFixed(2)}</Text>
                    <Text style={{ fontSize: 14, color: '#FFF' }} >$ {selectProduct.description}</Text>
                </View>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent:'center'
      },
});

export default ProductDetailsScreen;