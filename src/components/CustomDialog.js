import React from 'react';
import {View} from 'react-native';
import Dialog from 'react-native-dialog';
import {stylesCD} from './Components.css';

const CustomDialog = ({
  isVisible,
  title,
  description,
  visibility,
  operations,
}) => {
  return (
    <View style={stylesCD.container}>
      <Dialog.Container visible={isVisible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => visibility()} />
        {operations &&
          operations.length > 0 &&
          operations.map(element => (
            <Dialog.Button
              key={element.label}
              label={element.label}
              onPress={() => {
                element.method(element.data, element.operation);
              }}
            />
          ))}
      </Dialog.Container>
    </View>
  );
};

export default CustomDialog;
