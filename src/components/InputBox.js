import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {stylesIB} from './Components.css';

const InputBox = ({textTitle, textValue, changeValue, secure}) => {
  return (
    <View style={stylesIB.container}>
      <View style={stylesIB.textField}>
        <Text style={stylesIB.upText}>
          {textTitle} <Text style={stylesIB.textColor}>*</Text>{' '}
        </Text>

        <TextInput
          secureTextEntry={secure || false}
          value={textValue}
          onChangeText={text => changeValue(text)}
        />
      </View>
    </View>
  );
};

export default InputBox;
