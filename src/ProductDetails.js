import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect, useState, useRef} from 'react';
// import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

import {AuthContext} from './AuthProvider';
import axios from 'axios';
import Carousel, {Pagination} from 'react-native-snap-carousel';
// import { SliderBox } from 'react-native-image-slider-box';

const ProductDetails = (props, item) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const {width, height} = Dimensions.get('window');
  const {id} = props?.route?.params;
  const {token} = useContext(AuthContext);
  const [isloading, setIsloading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  console.log('token', token);
  console.log('id', id);
  useEffect(() => {
    setIsloading(true);
    axios
      .get(
        `http://103.117.66.70:5001/api/ProductMain/getproductdetailsbyid/${id}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'Application/json',
          },
        },
      )
      .then(res => {
        console.log('res..', JSON.stringify(res?.data));
        setProductDetail(res?.data);
        setIsloading(false);
      })
      .catch(e => {
        setIsloading(false);
        console.warn('e', e);
      });
  }, [token]);

  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            // borderWidth: 1,
            // padding: 20,
            // borderRadius: 20,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={{uri: item?.mediaURL}}
            style={{width: 330, height: 240}}
          />
        </View>

       
      </View>
    );
  };

  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={
          productDetail
            ? productDetail?.product_Price_Stock
              ? productDetail?.product_Price_Stock[0].product_Gallery
              : []
            : []
        }
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={
          productDetail
            ? productDetail?.product_Price_Stock
              ? productDetail?.product_Price_Stock[0].product_Gallery.length
              : []
            : []
        }
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
       <View>
          <Text style={{alignSelf: 'center', fontSize: 18}}>
            {productDetail?.product_Details?.name}
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 18, color: 'purple'}}>
            Brand Name: {productDetail?.product_Details?.brand_Name}
          </Text>

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              color: 'blue',
              fontWeight: 'bold',
            }}>
            Price $ {productDetail?.product_Price_Stock ? productDetail?.product_Price_Stock[0]?.unit_Price : null}
          </Text>
        </View>
    </View>
  );
};
export default ProductDetails;