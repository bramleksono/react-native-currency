import React, { Component } from 'react';

import {
 StyleSheet,
 Text,
 View,
} from 'react-native';

class Toolbar extends Component {
 render() {
    return (
      <View style={styles.toolbar}>
        <Text style={{marginLeft: 50, fontSize: 50, color: '#ffffff', fontWeight: 'bold'}}>Currency Converter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
      backgroundColor:'#1f2427',
      padding:10,
      flexDirection:'row',
      justifyContent: 'center',
  },
});

module.exports = Toolbar;
