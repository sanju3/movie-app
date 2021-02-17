import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import DetailsData from './Details/DetailsData';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.location.state.movie,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.root}>
          <Header name="DETAILS" />
          <View style={styles.container}>
            <DetailsData movie={this.state.movie} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
  },
});
