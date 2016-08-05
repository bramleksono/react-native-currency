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
  TextInput,
} from 'react-native';

import Toolbar from "./ui/toolbar.js";
import InputForm from "./ui/inputform.js";

class currency extends Component {
  render() {
    return (
      <View>
        <Toolbar/>
        <InputForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('currency', () => currency);
