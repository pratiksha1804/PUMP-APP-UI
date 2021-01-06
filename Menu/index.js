import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from '../Menu/SideMenu'
import stackNav from '../Menu/stacknav';

export default drawernav = DrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

// AppRegistry.registerComponent('Demo', () => drawernav);