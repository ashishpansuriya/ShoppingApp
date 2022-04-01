import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

export default function ProductNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductOverViewScreen" component={ProductOverViewScreen} options={({ route }) => ({
                title: "All Products",
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

                },
                headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 20
                },
            })} />

            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} options={({ route }) => ({
                title: route.params.productTitle,
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

                },
                headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
                headerTitleStyle: {
                    fontWeight: '700',
                    fontSize: 20
                },


            })} />
        </Stack.Navigator>
    );
};