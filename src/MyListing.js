import {StyleSheet, Text, View, FlatList,TouchableOpacity,Image, Dimensions} from 'react-native';

import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const MyListing = ({navigation}) => {

  const {getCartData,setGetCartData} = useContext(AuthContext)
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;

  // console.log('mylist getCartData',getCartData);

  const removeItem = (id) =>{
    console.log("afsdfsdfjlajsdflj",id);
    // const newItem = getCartData.filer(item=>item.product_Details.id !== id)
    // setGetCartData(newItem)
  }

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          width: ScreenWidth / 2 - 10,
          height: ScreenHeight / 2 - 100,
          margin: 2,
          borderColor: 'gray',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item?.id,
            })
          }>
          <Image
            source={{
              uri: item.mediaURL,
            }}
            style={{resizeMode: 'contain', height: 200}}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
            {item.tags}
          </Text>
          <Text numberOfLines={1} style={{fontSize: 10}}>
            {item.name}
          </Text>
        </View>

        <TouchableOpacity
        onPress={()=>removeItem(item)}
        >
          <View
            style={{
              // flex: 1,
              backgroundColor: '#009688',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Remove
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginBottom: 1}}>
      <FlatList
        onEndReachedThreshold={0.5}
        numColumns={2}
        horizontal={false}
        data={getCartData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyListing;

const styles = StyleSheet.create({});
