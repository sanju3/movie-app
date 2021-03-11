import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {captureImage, chooseImage} from '../../utils';
import {styles} from './ImagePickerContainer.css';

export default class imagePickerContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => captureImage('photo', this.props.handleImagePicker)}>
          <Text style={styles.text}>Capture Image</Text>
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => chooseImage('photo', this.props.handleImagePicker)}>
          <Text style={styles.text}>Choose Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
