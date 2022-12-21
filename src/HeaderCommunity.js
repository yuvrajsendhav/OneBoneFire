import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';

const HeaderCommunity = ({setListView,searchValue}) => {
  const [gridListColor, setGridListColor] = useState(true);
 
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
          <TouchableOpacity
            onPress={() => {
              setListView(true);
              setGridListColor(true);
            }}
            style={{marginLeft: 10}}>
            <Ionicons
              color={!gridListColor ? 'gray' : '#009688'}
              name="grid"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setListView(false);
              setGridListColor(false);
            }}
            style={{marginLeft: 8}}>
            <MaterialCommunityIcons
              color={gridListColor ? 'gray' : '#009688'}
              name="view-list"
              size={28}
            />
          </TouchableOpacity>
        </View>
        <Searchbar
          style={{width: '55%', backgroundColor: 'gray'}}
          placeholder="Type Here..."
          onChangeText={value=> searchValue(value)}
        />
        <View style={{marginRight: 10}}>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderCommunity;
