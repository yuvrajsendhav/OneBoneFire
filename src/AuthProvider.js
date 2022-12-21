import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [getCartData, setGetCartData] = useState([]);
  const [productDetail, setProductDetail] = useState({});

  // console.log('getCartData', getCartData);

  const login = userObj => {
    // setLoading(true)
    return axios
      .post('http://103.117.66.70:5001/api/Token/applogin', userObj)
      .then(function (response) {
        // console.log(response.status === 200);
        if (response?.status === 200) {
          setToken(response?.data?.token);
          setUserInfo(JSON.stringify(response?.data));
          AsyncStorage.setItem('userInfo', JSON.stringify(response));
          AsyncStorage.setItem('userToken', response?.data.token);
        }

        setLoading(false);
        return response?.data;
      })
      .catch(function (response) {
        // console.log(response);
      });
  };

  const Pdetail=(id) => {
    // setIsloading(true);
    console.log('AuthProvider id',id);
    console.log('AuthProvider token',token);
    return axios
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
        setGetCartData([...getCartData,{...res?.data,qty:1}]);
        // console.log('AuthProvider res..', res?.data)
        // return res?.data
        // setIsloading(false);
      })
      .catch(e => {
        // setIsloading(false);
        console.warn('e', e);
      });
  }

  // console.log('AuthProvider userToken', token);

  const logout = () => {
    setLoading(true);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');

    setUserInfo(null);
    setToken(null);
    setLoading(false);
  };

  const isLogin = async () => {
    try {
      setLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
      setToken(userToken);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        setProductList,
        setGetCartData,
        logout,
        setProductDetail,
        Pdetail,
        productDetail,  
        getCartData,
        loading,
        productList,
        token,
        userInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
