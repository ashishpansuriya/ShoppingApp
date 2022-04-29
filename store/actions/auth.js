export const SIGNUP ="SIGNUP";
export const LOGIN ="LOGIN";

export const signUp = (email,password) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbnCgAeQEA044GG1kjoHCWZAmudLyC2gs",{

            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password : password,
              returnSecureToken:true,
            }),
          });
  
          if (!response.ok) {
            throw new Error("Something Went Wrong");
          }
      
          const resData = await response.json();
        
  
        dispatch({ type: SIGNUP });
      } catch (err) {
        throw err;
      }
    };
  };

  export const signIn = (email,password) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbnCgAeQEA044GG1kjoHCWZAmudLyC2gs",{

            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password : password,
              returnSecureToken:true,
            }),
          });
  
          if (!response.ok) {
            throw new Error("Something Went Wrong");
          }
      
          const resData = await response.json();
          console.log(resData);
  
        dispatch({ type: LOGIN });
      } catch (err) {
        throw err;
      }
    };
  };