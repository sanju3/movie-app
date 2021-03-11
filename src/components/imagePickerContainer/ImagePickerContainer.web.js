import React, {Component} from 'react';
import {View} from 'react-native';

export default class imagePickerContainer extends Component {
  onFileChange = file => {
    this.props.handleImagePicker(URL.createObjectURL(file.target.files[0]));
  };
  render() {
    return (
      <View>
        <input type="file" onChange={this.onFileChange} />
      </View>
    );
  }
}
