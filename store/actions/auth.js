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
            const errorData = await response.json();
            console.log(errorData);
            const errorId = errorData.error.message;
             let message = 'Something Went Wrong';
             if(errorId === 'EMAIL_EXIST'){
              message = 'Email is already exist';
             }

            throw new Error(message);
          }
      
          const resData = await response.json();
        
  
        dispatch({ type: SIGNUP , token : resData.idToken , userId : resData.localId });
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
            const errorData = await response.json();
            console.log(errorData);
            const errorId = errorData.error.message;
             let message = 'Something Went Wrong';
             if(errorId === 'EMAIL_NOT_FOUND'){
              message = 'Email is not valid';
             }else if(errorId === 'INVALID_PASSWORD'){
              message = 'Password is not valid';
             }

            throw new Error(message);
          }
      
          const resData = await response.json();
          console.log(resData);
  
        dispatch({ type: LOGIN , token : resData.idToken , userId : resData.localId });
      } catch (err) {
        throw err;
      }
    };
  };