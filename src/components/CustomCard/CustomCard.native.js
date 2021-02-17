import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import {Link} from 'react-router-native';
import {Text, StyleSheet, View} from 'react-native';

class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
    };
  }

  render() {
    return (
      <Card>
        <Card.Title>{this.state.movie.display_title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: this.state.movie.multimedia.src}} />
        <Text style={{marginBottom: 10}}>{this.state.movie.headline}</Text>
        <View style={styles.button}>
          <Link
            to={{
              pathname: '/details',
              state: {movie: this.state.movie},
            }}>
            <Text>More Details</Text>
          </Link>
        </View>
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
  button: {
    padding: 10,
    backgroundColor: '#b1b1b3',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
