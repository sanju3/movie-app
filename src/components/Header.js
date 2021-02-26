import React from 'react';
import {View, Text} from 'react-native';
import {stylesHeader} from './Components.css';

const Header = ({name}) => {
  return (
    <View style={stylesHeader.container}>
      <Text style={stylesHeader.text}> {name} </Text>
    </View>
  );
};

export default Header;
