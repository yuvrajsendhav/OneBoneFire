import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderMyStuff = () => {
  return (
    <View
      style={{height: 50, backgroundColor: 'white', elevation: 4, zIndex: 1}}>
      <View
        style={{
          flex: 1,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons color={'#009688'} name="add" size={20} />
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: 10}}>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderMyStuff;