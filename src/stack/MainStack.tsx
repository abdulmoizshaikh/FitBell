import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {InitialStack} from './InititalStack';
import {AuthStack} from './AuthStack';

export const MainStack = props => {
  //console.log('propsss', props);
  const MainStack = createStackNavigator();
  const AppStacks = [...InitialStack, ...AuthStack];
  return (
    <MainStack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {AppStacks.map(stack => (
        <MainStack.Screen {...stack} />
      ))}
    </MainStack.Navigator>
  );
};
