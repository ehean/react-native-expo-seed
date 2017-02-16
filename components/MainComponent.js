import React, { PropTypes } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class MainComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          alt={'logo'}
        />

        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

MainComponent.propTypes = {
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
  },

  text: {
    color: '#242134',
    padding: 15,
  },
});

export default MainComponent;
