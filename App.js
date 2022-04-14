
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import ProductNavigation from './navigation/ProductNavigation';
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/order';

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
  orders  : ordersReducer
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

