import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const ListView = ({data, pageSize}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: ScreenHeight / 6,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 130,
              width: 130,
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: item.mediaURL,
              }}
              style={{resizeMode: 'contain', height: '100%'}}
            />
          </View>
          <View
            style={{
              margin: 10,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold'}}>{item.tags}</Text>
            <Text style={{fontSize: 12}}>{item.name}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginBottom: 150}}>
      <FlatList
        onEndReached={() => pageSize(10)}
        onEndReachedThreshold={0.5}
        numColumns={1}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListView;
