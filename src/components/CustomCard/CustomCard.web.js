import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

class CustomCard extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{this.props.movie.display_title}</Text>
          </View>
          <View style={styles.image}>
            <Image
              source={{uri: this.props.movie.multimedia.src}}
              style={styles.imageDim}
            />
          </View>
          <View style={styles.body}>
            <Text>{this.props.movie.headline}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() =>
                this.props.history.push({
                  pathname: '/details',
                  state: {movie: this.props.movie},
                })
              }>
              <Text style={styles.text}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dangerButton}
              onPress={() => {
                this.props.delete(this.props.movie.display_title);
              }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CustomCard;

const styles = StyleSheet.create({
  root: {
    width: 200,
    height: 300,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  container: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    borderBottomColor: 'black',
    height: 30,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  body: {
    marginBottom: 15,
    height: 60,
  },
  imageDim: {
    width: '100%',
    height: 100,
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
});
