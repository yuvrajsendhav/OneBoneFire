import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Message = () => {
  return <View style={{flex: 1,backgroundColor:'white'}}>
    <View style={styles.horizontalLine} />
    <Text>Message</Text>
  </View>
};

export default Message;

const styles = StyleSheet.create({
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});
