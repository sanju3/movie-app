import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import DetailsData from './Details/DetailsData';
import styles from './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.location.state && props.location.state.movie,
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Header name="DETAILS" />
        </View>
        <View style={styles.container}>
          {this.state.movie ? (
            <DetailsData
              movie={this.state.movie}
              history={this.props.history}
            />
          ) : (
            this.props.history.push('/')
          )}
        </View>
      </View>
    );
  }
}

export default Details;
