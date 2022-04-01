import PRODUCTS from "../../dummy/dummy";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const productReducer = (state = initialState, action) => {
    return state;
}

export default productReducer;