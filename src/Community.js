import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Marketplace from './Marketplace';
import Members from './Members';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Community = ({Navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Marketplace" component={Marketplace} />
      <Tab.Screen name="Members" component={Members} />
    </Tab.Navigator>
  );
};

export default Community;

const styles = StyleSheet.create({
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});
