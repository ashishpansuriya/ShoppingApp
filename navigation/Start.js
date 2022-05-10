import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// import { NavigationActions } from 'react-navigation';
import StartNavigation from "./StartNavigation";

const Start = (props) => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      // navRef.current.dispatch();
      // navRef.current.dispatch(
      // NavigationActions.navigate({
      //     routeName: 'StartupScreen',

      //     params: {},

      //     action: NavigationActions.navigate({ routeName: 'AuthScreen' }),
      //   })
      // );
    }
  }, [isAuth]);

  return <StartNavigation ref={navRef} />;
};

export default Start;
