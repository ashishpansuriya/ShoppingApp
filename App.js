
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import ProductNavigation from './navigation/ProductNavigation';
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer
  
});

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
           <ProductNavigation />
      </NavigationContainer>
    </Provider>


  );
}

