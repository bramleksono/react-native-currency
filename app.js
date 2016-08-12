
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

var FirstPage = require('./ui/FirstPage');
var CurrencyPage = require('./ui/CurrencyPage');

class app extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'FirstPage'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'FirstPage') {
      return (
        <FirstPage
          navigator={navigator} data={route.passProps}/>
      );
    }
    if (routeId === 'CurrencyPage') {
      return (
        <CurrencyPage
            navigator={navigator} data={route.passProps}/>
      );
    }
  }
}

module.exports = app;
