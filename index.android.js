/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class currency extends Component {
  render() {
    return (
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.welcome}>
          Input :
          </Text>
          <TextInput
            {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable = {true}
            maxLength = {40}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.welcome}>
          Output :
          </Text>
          <Text style={styles.welcome}>
          50 AUD
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    alignItems: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('currency', () => currency);
