import Expo from 'expo';
import React from 'react';
import MainStackNavigator from './navigators/MainStackNavigator';

class App extends React.Component {
  render() {
    return (
      <MainStackNavigator />
    );
  }
}

Expo.registerRootComponent(App);
