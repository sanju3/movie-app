import React, {Component} from 'react';
import {View} from 'react-native';
import CustomCard from './CustomCard';

class CustomCardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.movie,
    };
  }
  render() {
    return (
      <View>
        <CustomCard movie={this.state.movie} />
      </View>
    );
  }
}

export default CustomCardComponent;
