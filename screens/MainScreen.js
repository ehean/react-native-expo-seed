import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import MainComponent from '../components/MainComponent';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainComponent text={'Open up MainComponent.js to start working on your app!'} />

        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
      </View>
    );
  }
}

MainScreen.navigationOptions = {
  title: 'Seed project',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: Colors.base,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
