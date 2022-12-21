import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import {AuthContext} from './AuthProvider';

const GridView = ({navigation, data, pageSize}) => {
  const {setCartData, Pdetail, setGetCartData, getCartData} =
    useContext(AuthContext);
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;

  const _addToCart = item => {
    if (getCartData.some(data => data.product_Details.id == item.id)) {
      Alert.alert('item alreadty added!');
    } else {
      Pdetail(item.id);
      // console.log('res',res);
    }
  };

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

        <TouchableOpacity onPress={() => _addToCart(item)}>
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
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{marginBottom: 150}}>
      <FlatList
        onEndReached={() => pageSize(10)}
        onEndReachedThreshold={0.5}
        numColumns={2}
        horizontal={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default GridView;
