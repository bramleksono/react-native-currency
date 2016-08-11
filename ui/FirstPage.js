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
    var rate = '{"base":"IDR","date":"2016-08-10","rates":{"AUD":9.8786e-05,"BGN":0.00013371,"BRL":0.00023867,"CAD":9.9518e-05,"CHF":7.4674e-05,"CNY":0.00050705,"CZK":0.0018475,"DKK":0.00050852,"GBP":5.8479e-05,"HKD":0.00059305,"HRK":0.00051155,"HUF":0.021221,"ILS":0.00029121,"INR":0.0050952,"JPY":0.0077313,"KRW":0.083646,"MXN":0.0014009,"MYR":0.00030507,"NOK":0.00063285,"NZD":0.0001054,"PHP":0.0035638,"PLN":0.00029181,"RON":0.0003048,"RUB":0.0049279,"SEK":0.00064817,"SGD":0.00010233,"THB":0.0026566,"TRY":0.00022581,"USD":7.6458e-05,"ZAR":0.0010151,"EUR":6.8364e-05}}';
    this.exchangeRate = JSON.parse(rate);
    this.calculateOutput = this.calculateOutput.bind(this);
    this.receiveCurrency = this.receiveCurrency.bind(this);
  }

  calculateOutput(inputAmount, toRate) {
    inputAmount = inputAmount.replace(/\D/g,'');
    var output = inputAmount*toRate;
    this.setState({
      toAmount: output,
    });
  }

  receiveCurrency(data) {
    if (data.choose === 'start') {
      this.setState({
          fromCurrency: data.country,
      });
    }
    if (data.choose === 'target') {
      this.setState({
          toCurrency: data.country,
      });
    }
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
              onChangeText={(fromAmount) => this.calculateOutput(fromAmount, this.exchangeRate.rates[this.state.toCurrency])}
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
