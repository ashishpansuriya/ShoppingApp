import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const StartupScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        props.navigation.navigate('MainNAvigation', { screen: 'AuthScreen' });
        // props.navigation.navigate('MainNAvigation');
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate('MainNAvigation', { screen: 'AuthScreen' });
        // props.navigation.navigate('MainNAvigation');
        return;
      }


      const expireTime = expirationDate.getTime() - new Date().getTime();

    //   props.navigation.navigate('BottomTabNavigation');
      props.navigation.navigate('MainNAvigation', { screen: 'BottomTabNavigation' });
      dispatch(authActions.authenticate(userId, token ,expireTime ));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StartupScreen;
