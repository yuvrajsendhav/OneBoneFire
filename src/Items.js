import {
  Text,
  Image,
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import HeaderMyStuff from './HeaderMystuff';
import {AuthContext} from './AuthProvider';
import Stepper from './Stepper';
import {isEqualIcon} from 'react-native-paper/lib/typescript/components/Icon';

const Items = ({navigation}) => {
  const {getCartData, setGetCartData, productDetail, setProductDetail} =
    useContext(AuthContext);
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;
  const [total, setTotal] = useState(0);
  //console.log('Detail', productDetail);
  console.log('items getCartData', getCartData);
  //console.log("priceeeeeeee",productDetail ? (productDetail?.product_Price_Stock[0]?.unit_Price) : [])
  const removeItem = id => {
    console.log('items', id);
    const p = getCartData.filter(item => item.product_Details.id !== id);
    // const product = getCartData.filter(item =>item.id !== id)
    // console.log('product', p);

    setGetCartData(p);
  };

  console.log('productDetailxxxx', productDetail);

  const increment = id => {
    const newProductArray = getCartData.filter(item => {
      if (item.product_Details.id == id) {
        return item.qty++;
      }
    });
    console.log('newProductArray', newProductArray);
    setGetCartData(newProductArray);
  };

  const decrement = id => {
    const newProductArray = getCartData.filter(item => {
      if (item.product_Details.id == id) {
        if (item.qty > 1) {
          return item.qty--;
        } else {
          return item;
        }
      }
    });
    setGetCartData(newProductArray);
  };

  useEffect(() => {
    const amount = getCartData.map(item =>
      item.product_Price_Stock
        ? item.product_Price_Stock[0].unit_Price * item.qty
        : 0,
    );

    const amtData = amount.reduce((previous, current) => previous + current, 0);

    setTotal(amtData);
  }, [getCartData, total]);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: ScreenHeight / 6,
            backgroundColor: 'white',
            margin: 4,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetails', {
                id: item.product_Details.id,
              })
            }>
            <View
              style={{
                height: 130,
                width: 130,
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: item.product_Price_Stock
                    ? item.product_Price_Stock[0].product_Gallery[0]?.mediaURL
                    : null,
                }}
                style={{resizeMode: 'contain', height: '100%'}}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: '#07b00a', fontSize: 18}}>
                {item.product_Details?.brand_Name}
              </Text>
              <Text style={{color: '#07b0a5', fontSize: 18}}>
                {/* {productDetail
             ? productDetail?.product_Price_Stock
               ? productDetail?.product_Price_Stock[0].unit_Price
               : []
             : []} */}
                {item.product_Price_Stock
                  ? item.product_Price_Stock[0]?.unit_Price * item.qty
                  : null}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <Stepper /> */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 25,
                  //padding:20
                }}>
                <TouchableOpacity
                  onPress={() => decrement(item.product_Details.id)}>
                  <View>
                    <Text
                      style={{
                        fontSize: 25,
                        backgroundColor: '#009688',
                        width: 30,
                        paddingLeft: 10,
                        borderRadius: 4,
                        color: 'white',
                        //padding:10
                      }}>
                      -
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={{fontSize: 20, padding: 9}}>{item.qty}</Text>
                <TouchableOpacity
                  onPress={() => increment(item.product_Details.id)}>
                  <View>
                    <Text
                      style={{
                        fontSize: 25,
                        backgroundColor: '#009688',
                        width: 30,
                        paddingLeft: 8,
                        borderRadius: 4,
                        color: 'white',
                      }}>
                      +
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => removeItem(item.product_Details.id)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    color: 'white',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    height: 30,
                    width: 90,
                    borderRadius: 6,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Remove
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    },
    [getCartData],
  );

  return (
    <SafeAreaView>
      <HeaderMyStuff />
      <React.Fragment>
        {getCartData.length <= 0 ? (
          <View
            style={{
              justifyContent: 'center',
              marginTop: 200,
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20}}>No items..</Text>
          </View>
        ) : (
          <View style={{marginBottom: 150}}>
            <View style={{marginBottom: 70}}>
              <FlatList
                onEndReachedThreshold={1}
                numColumns={1}
                horizontal={false}
                data={getCartData}
                renderItem={renderItem}
                keyExtractor={item => {
                  return item.id;
                }}
              />
            </View>

            <View
              style={{
                zIndex: 2,
                padding: 6,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                height: 80,
                backgroundColor: 'white',
                flexDirection: 'row',
                elevation: 4,
                marginTop: 20,
              }}>
              <View style={{marginLeft: 18}}>
                <Text style={{fontSize: 18, color: '#07b0a5'}}>
                  Total ${total}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  borderRadius: 6,
                  justifyContent: 'center',
                  height: 40,
                  width: '50%',
                  backgroundColor: '#740cc4',
                }}>
                <View>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    BUY NOW
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </React.Fragment>
    </SafeAreaView>
  );
};

export default Items;
