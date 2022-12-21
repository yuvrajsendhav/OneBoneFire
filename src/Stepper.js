import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Stepper = () => {
  const [count,setCount]  =  useState(1)
  // console.log(count);
  
   
  return (
    <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 25,
              //padding:20
            }}>
            <TouchableOpacity onPress={() => count>1 ? setCount(count - 1) :0}>
              <View >
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
            <Text style={{fontSize: 20,padding:9}}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
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
  )
}

export default Stepper