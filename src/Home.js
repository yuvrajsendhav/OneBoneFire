

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{flex: 1,  marginTop:-20, backgroundColor:'white', paddingHorizontal:'3%'}}>
      <View style={styles.horizontalLine} />
      <Text style={styles.homeoverview}>Overview</Text>
      <View style={styles.homeGrower}>
        <Text>OK Botanicals Inc</Text>
        <Text>Grower</Text>
      </View>
      <View style={styles.homeGrower}>
        <Text>Lawton Ok 34333</Text>
        <Text>Up to 15 Listings<Text style={{fontWeight:'bold'}} >(Active)</Text> </Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.horizontalLine} />
      <View style={styles.bonePro}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>Bonfire Products</Text>
        <Text style={{marginLeft:10, fontSize:15}}>Marketplace</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.horizontalLine} />
      <View style={styles.itemListing}>
        <View style={styles.myItems}>
          <Text style={styles.numbers}>26</Text>
          <Text style={styles.words}>My Items</Text>
        </View>
        <View style={styles.myListing}>
          <Text style={styles.numbers}>2</Text>
          <Text style={styles.words}>My Listings</Text>
        </View>
      </View>
      <View style={styles.messFavo} >
        <View style={styles.newMess}>
          <Text style={styles.numbers}>4</Text>
          <Text style={styles.words}>New Messages</Text>
        </View>
        <View style={styles.favorites}>
          <View style={styles.listMem}>
          <View>
          <Text style={styles.wordsL}>Listings</Text>
          <Text style={styles.dNumbers}>7</Text>
          </View>
          <View>
          <Text style={styles.wordsL}>Members</Text>
          <Text style={styles.dNumbers}>4</Text>
          </View>
          </View>
          <Text style={[styles.favo]}>Favorites</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeoverview:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:8,
    marginTop:50
  },
  homeGrower:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:-5,
  },
  bonePro:{
    flexDirection:'row',
    marginLeft:80,
    marginTop:30,
  },
  itemListing:{
    flexDirection:'row',
    marginTop:30,
  },
  messFavo:{
    flexDirection:'row',
    marginTop:20,
  },
  myItems:{
    backgroundColor:'#58C7A7',
    width:'49%',
    height:100,
    borderRadius:10,
  },
  myListing:{
    backgroundColor:'#FFBF29',
    width:'49%',
    height:100,
    borderRadius:10,
    marginLeft:10,
  },
  newMess:{
    backgroundColor:'#9ECC69',
    width:'49%',
    height:100,
    borderRadius:10,
  },
  favorites:{
    backgroundColor:'#6AB8F6',
    width:'49%',
    height:100,
    borderRadius:10,
    marginLeft:10,
  },
  listMem:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:12,
  },
  favo:{
    alignSelf:'center',
    color:'white',
    fontSize:16,
  },
  numbers:{
    marginTop:18,
    alignSelf:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'white',
  },
  words:{
    marginTop:10,
    alignSelf:'center',
    fontSize:16,
    color:'white'
  },
  dNumbers:{
    alignSelf:'center',
    color:'white',
    marginTop:5,
    fontSize:20,
  },
wordsL:{
  color:'white',
  fontSize:15,
},
horizontalLine: {
  width: '100%',
  height: 1,
  backgroundColor: '#E0E0E0',
},
});

