import React, { useReducer, useCallback, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import Colors from "../../constants/Colors";
import * as authActions from "../../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const authHandler = () => {
    let action;
    if (isSignUp) {
      action = authActions.signUp(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }else{
        action = authActions.signIn (
            formState.inputValues.email,
            formState.inputValues.password
          );
    }
    dispatch(action);
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={styles.gradient}>
        <View style={styles.cardItem}>
          <ScrollView>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please Enter a Valid Email Address"
              onInputChange={inputChangeHandler}
              initialValue=""
            />

            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              minLength={5}
              required
              email
              autoCapitalize="none"
              errorText="Please Enter a Valid PassWord"
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              <Button
                title={isSignUp ? "Sign Up" : "LogIn"}
                color={Colors.Red}
                onPress={authHandler}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={`Switch to ${isSignUp ? "Login" : "Sign Up"} `}
                color={Colors.Yellow}
                onPress={() => {
                  setIsSignUp((prevState) => !prevState);
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    width: "80%",
    maxWidth: 400,
    padding: 20,
    shadowColor: Colors.Red,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },

  gradient: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Pink,
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
