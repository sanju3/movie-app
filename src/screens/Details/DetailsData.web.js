import React, {Component} from 'react';
import {View, StyleSheet, Button, Text, Image} from 'react-native';
import {Link} from 'react-router-dom';

class DetailsData extends Component {
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
          <View style={styles.summary}>
            <Text>{this.state.movie.summary_short}</Text>
          </View>
          <View style={styles.byline}>
            <Text>{'By Line: ' + this.state.movie.byline}</Text>
          </View>
          <View style={styles.date}>
            <Text>
              {' '}
              {'Publication Date: ' + this.state.movie.publication_date}
            </Text>
          </View>
          <View style={styles.button}>
            <Link
              to={{
                pathname: '/',
              }}>
              <Button title="Main Page" />
            </Link>
          </View>
        </View>
      </View>
    );
  }
}

export default DetailsData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    width: '40%',
    height: '40%',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageDim: {
    width: 400,
    height: 250,
  },
  summary: {marginBottom: 30},
  byline: {marginBottom: 30},
  date: {marginBottom: 30},
});
