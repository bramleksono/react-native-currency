import React, { Component } from 'react';

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 TextInput,
} from 'react-native';

class InputForm extends Component {
 render() {
     return (
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
});

module.exports = InputForm;
