import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import {Text, StyleSheet, Button, View, TouchableOpacity} from 'react-native';

class CustomCard extends Component {
  render() {
    return (
      <Card>
        <Card.Title>{this.props.movie.display_title}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={styles.image}
          source={{uri: this.props.movie.multimedia.src}}
        />
        <Text style={{marginBottom: 10}}>{this.props.movie.headline}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() =>
              this.props.history.push({
                pathname: '/details',
                state: {movie: this.props.movie},
              })
            }>
            <Text style={styles.text}>More details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dangerButton}
            onPress={() => {
              this.props.delete(this.props.movie.display_title);
            }}>
            <Text style={styles.text}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default CustomCard;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dangerButton: {
    backgroundColor: '#d95950',
    padding: 10,
    borderRadius: 5,
    width: '49%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '49%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
