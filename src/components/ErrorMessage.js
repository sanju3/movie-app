import React from 'react';
import {View, Text} from 'react-native';
import {stylesEM} from './Components.css';

const ErrorMessage = ({error}) => {
  return (
    <View>
      <Text style={stylesEM.text}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;
