import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { combineReducers, createStore , applyMiddleware } from "redux";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";

import ReduxThunk from 'redux-thunk';
import AuthScreen from "./screens/user/AuthScreen";
import MainNAvigation from "./navigation/MainNAvigation";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
  orders: ordersReducer,
  auth : authReducer,
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNAvigation />
      </NavigationContainer>
    </Provider>
  );
}