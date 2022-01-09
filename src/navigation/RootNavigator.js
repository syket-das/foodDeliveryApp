import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
