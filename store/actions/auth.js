import { AsyncStorage } from "react-native";
// export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATION = "AUTHENTICATION";

export const authenticate = (userId, token, expireTime) => {
  return (dispatch) => {
    dispatch(setLogoutTimer(expireTime));
    dispatch({ type: AUTHENTICATION, token: token, userId: userId });
  };
};

export const logOut = () => {
  clearTimeOut();
  AsyncStorage.removeItem("userData");
  return {
    type: LOGOUT,
  };
};

let timer;

const clearTimeOut = () => {
  if (timer) {
    clearTimeOut(timer);
  }
};

const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setLogoutTimer(() => {
      dispatch(logOut());
    }, expirationTime / 1000);
  };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbnCgAeQEA044GG1kjoHCWZAmudLyC2gs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        const errorId = errorData.error.message;
        let message = "Something Went Wrong";
        if (errorId === "EMAIL_EXIST") {
          message = "Email is already exist";
        }

        throw new Error(message);
      }

      const resData = await response.json();

      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          parseInt(resData.expireTime) * 5000
        )
      );

      const expireTime = new Date(
        new Date().getTime + parseInt(resData.expiresIn) * 1000
      );
      dataSaveInStorage(resData.idToken, resData.localId, expireTime);
    } catch (err) {
      throw err;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbnCgAeQEA044GG1kjoHCWZAmudLyC2gs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        const errorId = errorData.error.message;
        let message = "Something Went Wrong";
        if (errorId === "EMAIL_NOT_FOUND") {
          message = "Email is not valid";
        } else if (errorId === "INVALID_PASSWORD") {
          message = "Password is not valid";
        }

        throw new Error(message);
      }

      const resData = await response.json();
      console.log(resData);

      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          parseInt(resData.expireTime) * 5000
        )
      );
      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn) * 1000
      );
      dataSaveInStorage(resData.idToken, resData.localId, expirationDate);
    } catch (err) {
      throw err;
    }
  };
};

const dataSaveInStorage = (token, userId, expireTime) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expireTime.toISOString(),
    })
  );
};
