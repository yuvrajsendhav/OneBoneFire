import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Items from './Items';
import MyListing from './MyListing';
const Tab = createMaterialTopTabNavigator();

const Mystuff = () => {
  return  (
    <Tab.Navigator>
      <Tab.Screen name="My Items" component={Items} />
      <Tab.Screen name="MyListing" component={MyListing} />
    </Tab.Navigator>
  );
}

export default Mystuff

const styles = StyleSheet.create({
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
})
