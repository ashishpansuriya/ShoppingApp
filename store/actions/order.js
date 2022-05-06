import Order from "../../models/order";
export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

export const fetchOrder = () => {
  return async (dispatch ,getState) => {
    const token =getState().auth.token;
    const userId =getState().auth.userId;
    try {
      const response = await fetch(
        `https://shopping-a0001-default-rtdb.firebaseio.com/order/${userId}.json`
      );

      if (!response.ok) {
        throw new Error("Someting Went Wrong");
      }
      const resData = await response.json();
      const loadedOrder = [];

      for (const key in resData) {
        loadedOrder.push(
          new Order(
            key,
            resData[key].cartItems,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      }

      dispatch({ type: SET_ORDER, orderData: loadedOrder });
    } catch (err) {
      throw err;
    }
  };
};

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch ,getState) => {
    const token =getState().auth.token;
    const userId =getState().auth.userId;
    const date = new Date();
    const response = await fetch(
      `https://shopping-a0001-default-rtdb.firebaseio.com/order/${userId}.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date,
      },
    });
  };
};
