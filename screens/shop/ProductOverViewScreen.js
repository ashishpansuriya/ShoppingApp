import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableNativeFeedback, Button, ImageBackground, TouchableOpacity, Platform } from "react-native";

import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";


let TouchableComp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version > 23) {
    TouchableComp = TouchableNativeFeedback;
}

const ProductItem = props => {
    return (
        <TouchableComp onPress={props.onViewDetail} useForeground>
            <View style={styles.container}>
                <ImageBackground style={{ justifyContent: 'flex-end', width: '100%', height: 180 }} source={{ uri: props.image }} >
                </ImageBackground>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, marginVertical: 4, color: '#FFF' }}>{props.title}</Text>
                        <Text style={{ fontSize: 14, color: '#FFF' }} >$ {props.price.toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Button color={Colors.Red} title="View Details" onPress={props.onViewDetail}></Button>
                        <Button color={Colors.Red} title="To Cart" onPress={props.onAddToCart} />
                    </View>
                </View>
            </View>

        </TouchableComp>

    )
};

const ProductOverViewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => { props.navigation.navigate('ProductDetailsScreen', { description: itemData.item.description, productTitle: itemData.item.title, productPrice: itemData.item.price, pId: itemData.item.id, image: itemData.item.imageUrl }) }} />}
            onAddToCart={() => { }} />
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 11,
        overflow: 'hidden',
        borderRadius: 11,
        backgroundColor: 'white',
        height: 250,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: '90%'
    },
});

export default ProductOverViewScreen;