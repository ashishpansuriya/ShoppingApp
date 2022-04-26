import PRODUCTS from "../../dummy/dummy";
import Product from "../../models/Product";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1")
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {

case SET_PRODUCT:
  return{
    availableProducts: action.products,
    userProducts:action.products.filter((prod) => prod.ownerId === "u1")
  }

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        prod => prod.id === action.pId
      );
      console.log(">>>>>>>>" , productIndex);
      const updatedProduct = new Product(
        action.pId,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pId
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        action.productData.id,
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      ); 
      
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pId
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pId
        ),
      };
  }
  return state;
};

export default productReducer;