import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { combineReducers, createStore , applyMiddleware } from "redux";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/order";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}