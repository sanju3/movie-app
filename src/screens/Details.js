import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
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
      <View style={styles.root}>
        <View style={styles.header}>
          <Header name="DETAILS" />
        </View>
        <View style={styles.container}>
          <DetailsData movie={this.state.movie} history={this.props.history} />
        </View>
      </View>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
  },
  container: {
    height: '100%',
    margin: 10,
  },
});
