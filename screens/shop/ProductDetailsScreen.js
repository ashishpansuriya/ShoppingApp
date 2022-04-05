import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import Button from 'apsl-react-native-button';

import { useSelector,useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = props => {
    const params = props.route.params;
    const pId = params.pId;
    const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === pId));
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.container}>
            <Image style={{ justifyContent: 'center', width: '90%', height: 250, alignSelf: 'center', margin: 10 }} source={{ uri: selectProduct.imageUrl }} />

            <View style={{ width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end', paddingHorizontal: 20 }}>

                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.textTitle}>{selectProduct.title}</Text>
                    <Text style={styles.textPrice} >$ {selectProduct.price.toFixed(2)}</Text>
                </View>

                <Button style={styles.buttonStyle}
                    textStyle={styles.textStyle8}
                    onPress={() => {dispatch(cartActions.addToCart(selectProduct))}}>
                    <View style={styles.customViewStyle}>
                        <Text style={{ width: '100%', textAlign: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            Add Cart
                        </Text>
                    </View>
                </Button>

                <Text style={ styles.textDesc} >{selectProduct.description}</Text>
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

    buttonStyle: {
        width: 120,
        height: 40,
        alignItems: 'center',
        borderColor: Colors.Blue,
        alignSelf: 'flex-end'
    },
    customViewStyle: {
        width: 120,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },

    textStyle8: {
        width: 200,
        fontWeight: '500',
        color: '#333',
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
        paddingHorizontal: 5,
        alignContent: 'space-between'
    },

    textTitle: {
        fontSize: 24,
        color: Colors.Black,
        fontStyle: 'italic',
        width: '60%',
        alignContent: 'flex-start',
        alignItems: "flex-start",
        alignSelf: 'flex-start',
    },

    textPrice: {
        fontSize: 14,
        alignContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        color: Colors.Black,
    },
    textDesc: {
        fontSize: 14,
        color: Colors.Black,
        width: '100%',
        textAlign: 'center',
        marginVertical: 20
    }
});

export default ProductDetailsScreen;