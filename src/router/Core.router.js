import React, { Fragment, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, StatusBar, Alert } from 'react-native';
import { Provider } from 'react-redux';
import Redux from '../configs/redux/Redux,config';
import {
  navigationRef,
  isReadyRef,
  navigate,
} from '../libs/helpers/RootNavigation';
import Splash from '../screens/Splash.screens';
import Home from '../screens/Home.screens';
import DetailContact from '../screens/DetailContact.screens';
import CreateContact from '../screens/CreateContact.screens';




const Stack = createNativeStackNavigator();


const Core = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <Fragment>
      <Provider store={Redux}>
        <StatusBar backgroundColor={'#467D7F '} translucent={false} />
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: true,
              animation: 'none',
            }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailContact"
              component={DetailContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateContact"
              component={CreateContact}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Fragment>
  )
}

export default Core