import CardItem from "../../models/card-item";
import { ADD_TO_CART, REMOVE_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/order";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  items: {},
  totalAmounts: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewItems;

      if (state.items[addedProduct.id]) {
        updatedOrNewItems = new CardItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewItems = new CardItem(1, prodPrice, prodTitle, prodPrice);
      }

      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewItems },
        totalAmounts: state.totalAmounts + prodPrice,
      };
    case REMOVE_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;

      let updatedCartItems;

      if (currentQty > 1) {
        const updatedCartItem = new CardItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );

        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmounts: state.totalAmounts - selectedCartItem.productPrice,
      };

    
    case ADD_ORDER:
      return initialState;
  
      case DELETE_PRODUCT:
        if (!state.items[action.pId]) {
          return state;
        }
        const updatedItems = { ...state.items };
        const itemTotal = state.items[action.pId].sum;
        delete updatedItems[action.pId];
  
        return {
          ...state,
          items: updatedItems,
          totalAmounts: state.totalAmounts - itemTotal,
        };
    }


  return state;
};
