import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {Link} from 'react-router-native';

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
          <Card>
            <Card.Title>{this.state.movie.display_title}</Card.Title>
            <Card.Divider />
            <Card.Image source={{uri: this.state.movie.multimedia.src}} />
            <Text style={{marginBottom: 10}}>
              {this.state.movie.summary_short}
            </Text>
            <Text style={{marginBottom: 10}}>
              {'By Line: ' + this.state.movie.byline}
            </Text>
            <Text style={{marginBottom: 10}}>
              {'Publication Date: ' + this.state.movie.publication_date}
            </Text>
            <View style={styles.button}>
              <Link
                to={{
                  pathname: '/',
                }}>
                <Text>Main Page</Text>
              </Link>
            </View>
          </Card>
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
  },
  container: {
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#b1b1b3',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
