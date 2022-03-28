import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';


const Stack = createNativeStackNavigator();

export default function ProductNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductOverViewScreen" component={ProductOverViewScreen} />
        </Stack.Navigator>
    );
};