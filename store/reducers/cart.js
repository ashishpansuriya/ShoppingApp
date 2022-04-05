import CardItem from "../../models/card-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
    items: {},
    totalAmounts: 0
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.price;

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
            return{
                ...state,
                items:{...state.items,[addedProduct.id] : updatedOrNewItems},
                totalAmounts: state.totalAmounts + prodPrice 
            };
    }

    return state;
}

export default cartReducer;