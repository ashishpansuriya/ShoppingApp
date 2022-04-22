import PRODUCTS from "../../dummy/dummy";
import Product from "../../models/Product";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pId
      );
      const updatedProduct = new Product(
        action.pId,
        state.userProducts[productIndex].ownerId,

        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.userProducts[productIndex].price
      );

      const updateUserProduct = [...state.userProducts];
      updateUserProduct[productIndex] = updatedProduct;
      const availableProducts = state.availableProducts.findIndex(
        (prod) => prod.id === action.pId
      );

      const updateAvailableProduct = [...state.availableProducts];
      updateAvailableProduct[availableProducts] =updatedProduct;

      return {
        ...state,
        availableProducts: updateAvailableProduct,
        userProducts: updateUserProduct,
      };

    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
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