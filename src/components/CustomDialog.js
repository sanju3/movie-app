import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Dialog from 'react-native-dialog';

class CustomDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Dialog.Container visible={this.props.isVisible}>
          <Dialog.Title>{this.props.title}</Dialog.Title>
          <Dialog.Description>{this.props.description}</Dialog.Description>
          <Dialog.Button
            label="Cancel"
            onPress={() => this.props.visibility()}
          />
          {this.props.operations.map(element => (
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
  }
}

export default CustomDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
