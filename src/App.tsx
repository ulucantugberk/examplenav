import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainRouter} from './router';

export default function App(): JSX.Element {
  return (
      <NavigationContainer>
          <MainRouter />
      </NavigationContainer>
  );
}
