import {SafeAreaView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthProvider';
import GridView from './GridView';
import ListView from './ListView';
import HeaderCommunity from './HeaderCommunity';

const MarketPlace = ({navigation}) => {
  const [listView, setListView] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const {token, productList, setProductList} = useContext(AuthContext);
  const [search, setSearch] = useState('');
  
  const newSearchArray = productList.filter(items => {
    const itemToUpperCase = items.tags.toUpperCase();
    const searchValueToUpperCase = search.toUpperCase();
    return itemToUpperCase.includes(searchValueToUpperCase);
  });
  useEffect(() => {
    axios
      .get(
        `http://103.117.66.70:5001/api/ProductMain/allproducts?pageNumber=0&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'Application/json',
          },
        },
      )
      .then(res => setProductList(res.data.items))
      .catch(e => {
        console.log('myItem error', e.response);
      });
  }, [pageSize]);
  
  const getListView = view => {
    setListView(view);
  };
  const trigerPageSize = value => {
    console.log(pageSize + value);
    setPageSize(pageSize + value);
  };
  const getSearchValue = value => {
    setSearch(value);
  };
  console.log(search);
  return (
    <SafeAreaView>
      <HeaderCommunity setListView={getListView} searchValue={getSearchValue} />
      {listView ? (
        <GridView
          navigation={navigation}
          data={newSearchArray}
          pageSize={trigerPageSize}
        />
      ) : (
        <ListView data={newSearchArray} pageSize={trigerPageSize} />
      )}
    </SafeAreaView>
  );
};
export default MarketPlace;
