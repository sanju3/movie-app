import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.error}</Text>
      </View>
    );
  }
}

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
