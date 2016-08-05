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
       <View style={styles.column}>
         <View style={styles.row}>
           <Text style={styles.leftTitle}>From : </Text>
           <TextInput style={[styles.leftTitle, styles.TextInput]}/>
           <Text style={[styles.leftTitle, styles.currencyTitle]}>AUD</Text>
         </View>
         <View style={styles.row}>
           <Text style={styles.leftTitle}>To :
           </Text>
           <Text style={[styles.leftTitle, styles.rightTitle]}>
           50
           </Text>
           <Text style={[styles.leftTitle, styles.currencyTitle]}>AUD</Text>
         </View>
       </View>
     );
      }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingTop:30,
  },
  leftTitle: {
    flex: 1,
    fontSize: 50,
    padding: 10,
    backgroundColor: '#f5bddd',
  },
  textInput: {
    flex: 4,
    padding: 0,
    textAlign: 'center',
  },
  rightTitle: {
    flex: 4,
    textAlign: 'center',
  },
  currencyTitle: {
    flex: 1,
    textAlign: 'right',
  },
});

module.exports = InputForm;
