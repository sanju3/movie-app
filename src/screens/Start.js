import React, {Component} from 'react';
import {View} from 'react-native';
import Loader from '../components/Loader/Loader';
import styles from './Start.css';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.root}>
        <Loader />
      </View>
    );
  }
}

export default Start;
