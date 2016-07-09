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
  View
} from 'react-native';

import Drawer from 'react-native-drawer';
import DrawerContent from './app/components/DrawerContent';

class WhatIsHot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Drawer
          style={styles.drawer}
          type='static'
          content={<DrawerContent />}
          openDrawerOffset={100}
          styles={styles.drawerStyles}
          tweenHandler={Drawer.tweenPresets.parallax}
          >
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerStyles: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
});

AppRegistry.registerComponent('WhatIsHot', () => WhatIsHot);
