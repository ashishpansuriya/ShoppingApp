import { async } from "validate.js";
import Product from "../../models/Product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://shopping-a0001-default-rtdb.firebaseio.com/product.json"
      );

      if (!response.ok) {
        throw new Error("Someting Went Wrong");
      }
      const resData = await response.json();
      const loadedProduct = [];

      for (const key in resData) {
        loadedProduct.push(
          new Product(
            key,
            "u1",
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }

      dispatch({ type: SET_PRODUCT, products: loadedProduct });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    await fetch(
      `https://shopping-a0001-default-rtdb.firebaseio.com/product/${productId}.json`,
      {
        method: "DELETE",
      }
    );

    dispatch({
      type: DELETE_PRODUCT,
      pId: productId,
    });
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://shopping-a0001-default-rtdb.firebaseio.com/product.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
          price,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};
export const updateProduct = (id, title, description, imageUrl, price) => {
  return async (dispatch) => {
    await fetch(
      `https://shopping-a0001-default-rtdb.firebaseio.com/product/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
      }
    );

    dispatch({
      type: UPDATE_PRODUCT,
      pId: id,
      productData: {
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};
