import PRODUCTS from "../../dummy/dummy";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const productReducer = (state = initialState, action) => {

    switch(action.type){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pId),
                availableProducts: state.availableProducts.filter(product => product.id !== action.pId)
            };
    }
    return state;
}

export default productReducer;