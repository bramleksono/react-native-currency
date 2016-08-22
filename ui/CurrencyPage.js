'use strict';

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Image,
 Text,
 View,
 ListView,
 Navigator,
 TextInput,
 TouchableOpacity,
} from 'react-native';

const AustraliaFlagImg = require('../img/flag/Australia.png');
const BrazilFlagImg = require('../img/flag/Brazil.png');
const BulgariaFlagImg = require('../img/flag/Bulgaria.png');
const CanadaFlagImg = require('../img/flag/Canada.png');
const ChinaFlagImg = require('../img/flag/China.png');
const CroatiaFlagImg = require('../img/flag/Croatia.png');
const CzechFlagImg = require('../img/flag/Czech.png');
const DenmarkFlagImg = require('../img/flag/Denmark.png');
const GreatBritainFlagImg = require('../img/flag/GreatBritain.png');
const HungaryFlagImg = require('../img/flag/Hungary.png');
const IcelandFlagImg = require('../img/flag/Iceland.png');
const IndiaFlagImg = require('../img/flag/India.png');
const IndonesiaFlagImg = require('../img/flag/Indonesia.png');
const IsraelFlagImg = require('../img/flag/Israel.png');
const JapanFlagImg = require('../img/flag/Japan.png');
const MalaysiaFlagImg = require('../img/flag/Malaysia.png');
const MexicoFlagImg = require('../img/flag/Mexico.png');
const NewZealandFlagImg = require('../img/flag/NewZealand.png');
const NorwayFlagImg = require('../img/flag/Norway.png');
const PhilippineFlagImg = require('../img/flag/Philippine.png');
const PolandFlagImg = require('../img/flag/Poland.png');
const RomaniaFlagImg = require('../img/flag/Romania.png');
const RussiaFlagImg = require('../img/flag/Russia.png');
const SingaporeFlagImg = require('../img/flag/Singapore.png');
const SouthAfricaFlagImg = require('../img/flag/SouthAfrica.png');
const SouthKoreaFlagImg = require('../img/flag/SouthKorea.png');
const SwedenFlagImg = require('../img/flag/Sweden.png');
const SwitzerlandFlagImg = require('../img/flag/Switzerland.png');
const ThailandFlagImg = require('../img/flag/Thailand.png');
const TurkeyFlagImg = require('../img/flag/Turkey.png');
const USFlagImg = require('../img/flag/US.png');
const BlankFlagImg = require('../img/flag/BlankFlag.png');

var countryData = [{"country":"US","symbol":"USD"},{"country":"Japan","symbol":"JPY"},{"country":"Bulgaria","symbol":"BGN"},{"country":"Czech","symbol":"CZK"},{"country":"Denmark","symbol":"DKK"},{"country":"Great Britain","symbol":"GBP"},{"country":"Hungary","symbol":"HUF"},{"country":"Poland","symbol":"PLN"},{"country":"Romania","symbol":"RON"},{"country":"Sweden","symbol":"SEK"},{"country":"Switzerland","symbol":"CHF"},{"country":"Norway","symbol":"NOK"},{"country":"Croatia","symbol":"HRK"},{"country":"Russia","symbol":"RUB"},{"country":"Turkey","symbol":"TRY"},{"country":"Australia","symbol":"AUD"},{"country":"Brazil","symbol":"BRL"},{"country":"Canada","symbol":"CAD"},{"country":"China","symbol":"CNY"},{"country":"Hongkong","symbol":"HKD"},{"country":"Indonesia","symbol":"IDR"},{"country":"Israel","symbol":"ILS"},{"country":"India","symbol":"INR"},{"country":"South Korea","symbol":"KRW"},{"country":"Mexico","symbol":"MXN"},{"country":"Malaysia","symbol":"MYR"},{"country":"New Zealand","symbol":"NZD"},{"country":"Philippine","symbol":"PHP"},{"country":"Singapore","symbol":"SGD"},{"country":"Thailand","symbol":"THB"},{"country":"South Africa","symbol":"ZAR"},{"country":"Iceland","symbol":"ISK"}];

class CurrencyPage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(countryData)
    };
  }
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#1f2427', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          }
          />
    );
  }

  getImagePath(countryName) {
    if (countryName === "Australia") {
      return AustraliaFlagImg;
    }
    if (countryName === "Brazil") {
      return BrazilFlagImg;
    }
    if (countryName === "Bulgaria") {
      return BulgariaFlagImg;
    }
    if (countryName === "Canada") {
      return CanadaFlagImg;
    }
    if (countryName === "China") {
      return ChinaFlagImg;
    }
    if (countryName === "Croatia") {
      return CroatiaFlagImg;
    }
    if (countryName === "Czech") {
      return CzechFlagImg;
    }
    if (countryName === "Denmark") {
      return DenmarkFlagImg;
    }
    if (countryName === "Great Britain") {
      return GreatBritainFlagImg;
    }
    if (countryName === "Hungary") {
      return HungaryFlagImg;
    }
    if (countryName === "Iceland") {
      return IcelandFlagImg;
    }
    if (countryName === "India") {
      return IndiaFlagImg;
    }
    if (countryName === "Indonesia") {
      return IndonesiaFlagImg;
    }
    if (countryName === "Israel") {
      return IsraelFlagImg;
    }
    if (countryName === "Japan") {
      return JapanFlagImg;
    }
    if (countryName === "Malaysia") {
      return MalaysiaFlagImg;
    }
    if (countryName === "Mexico") {
      return MexicoFlagImg;
    }
    if (countryName === "New Zealand") {
      return NewZealandFlagImg;
    }
    if (countryName === "Norway") {
      return NorwayFlagImg;
    }
    if (countryName === "Philippine") {
      return PhilippineFlagImg;
    }
    if (countryName === "Poland") {
      return PolandFlagImg;
    }
    if (countryName === "Romania") {
      return RomaniaFlagImg;
    }
    if (countryName === "Russia") {
      return RussiaFlagImg;
    }
    if (countryName === "Singapore") {
      return SingaporeFlagImg;
    }
    if (countryName === "South Africa") {
      return SouthAfricaFlagImg;
    }
    if (countryName === "South Korea") {
      return SouthKoreaFlagImg;
    }
    if (countryName === "Sweden") {
      return SwedenFlagImg;
    }
    if (countryName === "Switzerland") {
      return SwitzerlandFlagImg;
    }
    if (countryName === "Thailand") {
      return ThailandFlagImg;
    }
    if (countryName === "Turkey") {
      return TurkeyFlagImg;
    }
    if (countryName === "US") {
      return USFlagImg;
    }

    return BlankFlagImg;
  }

  renderRow(countryItem) {
    return (
      <View style={styles.row}>
          <Image
            source={this.getImagePath(countryItem.country)} resizeMode='contain' style={styles.flagimg}/>
        <Text style={styles.outputText} onPress={()=> this.gotoFirstPage(countryItem.symbol)}>{countryItem.country + " " + countryItem.symbol}</Text>
      </View>
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  gotoFirstPage(currency) {
    console.log("sending currency "+currency);
    console.log(this.props.data);
    this.props.data.callback({
      choose: this.props.data.choose,
      country: currency
    });
    this.props.navigator.pop();
    /*
    this.props.navigator.resetTo({
      id: 'FirstPage',
      passProps: {
        choose: this.props.data.choose,
        country: currency
      }
    });
    */
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
        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        onPress={() => navigator.parentNavigator.pop()}>Choose Currency</Text>
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
    paddingTop: 60,
    paddingBottom: 10.
  },
  row: {
    flex: 2,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  flagimg: {
    height: 50,
    width: 100,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  outputText: {
    fontSize: 20,
    color: 'white',
  },
});

module.exports = CurrencyPage;
