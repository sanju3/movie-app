import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Link} from 'react-router-dom';

class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>{this.state.movie.display_title}</Text>
          </View>
          <View style={styles.image}>
            <Image
              source={{uri: this.state.movie.multimedia.src}}
              style={styles.imageDim}
            />
          </View>
          <View style={styles.body}>
            <Text>{this.state.movie.headline}</Text>
          </View>
          <View style={styles.button}>
            <Link
              to={{
                pathname: '/details',
                state: {movie: this.state.movie},
              }}>
              <Text style={styles.link}>More Details</Text>
            </Link>
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
    height: 70,
  },
  imageDim: {
    width: '100%',
    height: 100,
  },
  button: {
    padding: 10,
    backgroundColor: '#b1b1b3',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  link: {textDecoration: 'none'},
});
