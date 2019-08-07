/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from "react-native-elements"
import { getStatusBarHeight } from "react-native-elements/src/config"

const MyCustomLeftComponent = () => {
  return <TouchableHighlight 
    style={{flex:1,minWidth:48, justifyContent:"center", alignItems: "center"}}
    underlayColor="#F0F0F0"
    onPress={()=>null}
  >
    <Icon name="logo-javascript" size={28} color="#3E3E3E" />
  </TouchableHighlight>
}

const App = () => {
  return (
      <Header
        backgroundColor="#FAFAFA"
        placement="left"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={{ text: 'MY TITLE', style: { color: '#000' } }}
        rightComponent={<MyCustomLeftComponent />}
        statusBarProps={{
          translucent: true,
          barStyle: 'dark-content',
          backgroundColor: "#F0F0F0"
        }}
        containerStyle={{
          elevation: 2,
          shadowOpacity: 1,
          paddingHorizontal : 0,
          height: 48+getStatusBarHeight()
        }}
      />
  );
};


export default App;
