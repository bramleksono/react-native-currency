'use strict';

import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 ListView,
 Navigator,
 TextInput,
 TouchableOpacity,
} from 'react-native';

var countryData = [{"country":"Australia","symbol":"AUD"},{"country":"Indonesia","symbol":"IDR"}];

class CurrencyPage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.convertCountryArrayToMap())
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

  renderRow(countryItem) {
    return (
      <Text style={styles.outputText} onPress={()=> this.gotoFirstPage(countryItem)}>{countryItem}</Text>
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

  convertCountryArrayToMap() {
    var countryMap = {}; // Create the blank map
    countryData.forEach(function(countryItem) {
      if (!countryMap[countryItem.country]) {
        countryMap[countryItem.country] = [];
      }

      countryMap[countryItem.country].push(countryItem.symbol);

    });
    return countryMap;
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
        <Text style={{color: 'white', margin: 10, fontSize: 40, fontWeight: 'bold'}}
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
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  outputText: {
    fontSize: 50,
    color: 'white',
  },
});

module.exports = CurrencyPage;
