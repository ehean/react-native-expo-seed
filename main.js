import Exponent from 'exponent';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainComponent from './components/MainComponent';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'My first application'} />

        <MainComponent text={'Open up MainComponent.js to start working on your app!'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Exponent.registerRootComponent(App);
