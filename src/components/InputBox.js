import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

class InputBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textField}>
          <Text style={styles.upText}>
            {this.props.textTitle} <Text style={styles.textColor}>*</Text>{' '}
          </Text>

          <TextInput
            value={this.props.textValue}
            onChangeText={text => this.props.changeValue(text)}
          />
        </View>
      </View>
    );
  }
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  textField: {
    width: '100%',
  },
  upText: {
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textColor: {color: 'red'},
});
