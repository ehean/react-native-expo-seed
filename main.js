import Exponent from 'exponent';
import React from 'react';
import MainStackNavigator from './navigators/MainStackNavigator';

class App extends React.Component {
  render() {
    return (
      <MainStackNavigator />
    );
  }
}

Exponent.registerRootComponent(App);
