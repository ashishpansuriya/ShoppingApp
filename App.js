import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/order";
import ProductNavigation from "./navigation/ProductNavigation";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}