'use strict';

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Navigator,
 TextInput,
 TouchableOpacity,
} from 'react-native';

import Toolbar from "./toolbar.js";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  fromCurrency: "IDR",
                  toCurrency: "AUD",
                  fromRate: 1,
                  toRate: 0.000098786,
                  toAmount: 0,
                  };
    this.getRateFromAPI(this.state.fromCurrency);
    this.calculateOutput = this.calculateOutput.bind(this);
    this.receiveCurrency = this.receiveCurrency.bind(this);
  }
  async getRateFromAPI(fromCurrency) {
    console.log("fetching.."+fromCurrency);
    try {
      let response = await fetch('http://api.fixer.io/latest?base='+fromCurrency);
      let responseJson = await response.json();
      console.log(responseJson);
      this.exchangeRate = responseJson;
    } catch(error) {
      console.error(error);
    }
  }
  calculateOutput(inputAmount) {
    var toRate = 1;
    if (this.state.fromCurrency != this.state.toCurrency) {
      toRate = this.exchangeRate.rates[this.state.toCurrency]
    }

    inputAmount = inputAmount.replace(/\D/g,'');
    var output = inputAmount*toRate;
    this.setState({
      fromAmount: inputAmount,
      toAmount: output,
    });
  }
  receiveCurrency(data) {
    if (data.choose === 'start') {
      if (this.state.fromCurrency != data.country) {
        //changing from currency, refresh data and ui
        console.log("changing country");
        this.getRateFromAPI(data.country);
        this.setState({
            fromCurrency: data.country,
        });
      }
    }
    if (data.choose === 'target') {
      this.setState({
          toCurrency: data.country,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    //reset amount
    this.setState({
      fromAmount: "",
      toAmount: "0",
    });
  }
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#1f2427', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          }
          />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <View style={styles.row}>
            <View style={styles.column}>
            <Text style={{fontSize: 25,color: 'white',}}>From</Text>
            <TextInput placeholder="Type amount" keyboardType="phone-pad" style={styles.textInput}
              onChangeText={(fromAmount) => this.calculateOutput(fromAmount)}
              value={this.state.fromAmount}
            />
            <Text style={styles.currency}
                onPress={this.chooseStartCurrency.bind(this)}>{this.state.fromCurrency}</Text>
            </View>
          </View>
          <View style={styles.bar}></View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{fontSize: 25,color: 'white'}}>To</Text>
              <Text style={styles.outputText}>{this.state.toAmount}</Text>
              <Text style={styles.currency}
                  onPress={this.chooseTargetCurrency.bind(this)}>{this.state.toCurrency}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  chooseStartCurrency() {
    this.gotoCurrencyChooser({choose: 'start'});
  }
  chooseTargetCurrency() {
    this.gotoCurrencyChooser({choose: 'target'});
  }
  gotoCurrencyChooser(property) {
    console.log("choose: "+ property.choose);
    this.props.navigator.push({
      id: 'CurrencyPage',
      passProps: {choose: property.choose, callback: this.receiveCurrency},
    });

  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 40, fontWeight: 'bold'}}>
          Currency Converter
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1f2427',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10.
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  currency: {
    fontSize: 80,
    color: 'gold',
    fontWeight: 'bold',
  },
  outputText: {
    fontSize: 50,
    color: 'white',
  },
  textInput: {
    fontSize: 50,
    color: 'white',
    width: 400,
    textAlign: 'center',
  },
  circle: {
    width: 600,
    height: 600,
    borderRadius: 600/2,
    backgroundColor: '#11bdff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    alignSelf: 'center',
    borderRadius: 1,
    height: 2,
    backgroundColor:'white',
    width: 500,
  },
});

module.exports = FirstPage;
