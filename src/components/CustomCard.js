import React, {Component} from 'react';
import {Card} from 'react-native-elements';

import {Text, Button} from 'react-native';
import {Image, StyleSheet} from 'react-native';

class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
    };
  }

  moreDeatailsHandler = () => {
    this.props.navigation.navigate('Details', {movie: this.state.movie});
  };

  render() {
    return (
      <Card>
        <Card.Title>{this.state.movie.display_title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: this.state.movie.multimedia.src}} />
        <Text style={{marginBottom: 10}}>{this.state.movie.headline}</Text>
        <Button title="MORE DETAILS" onPress={this.moreDeatailsHandler} />
      </Card>
    );
  }
}

export default CustomCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
