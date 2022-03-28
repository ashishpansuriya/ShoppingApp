
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import ProductNavigation from './navigation/ProductNavigation';
// import ProductOverViewScreen from './screens/shop/ProductOverViewScreen';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   products: productReducer
// });

// const store = createStore(rootReducer);


export default function App() {

  return (
    // <Provider store={store}>
      <NavigationContainer>
           <ProductNavigation />
      </NavigationContainer>
    // </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

});
