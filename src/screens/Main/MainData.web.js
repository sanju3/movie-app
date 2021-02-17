import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomCardComponent from '../../components/CustomCard/CustomCardComponent';

class MainData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          {this.state.movies.map(movie => (
            <View style={styles.seporator} key={movie.display_title}>
              <CustomCardComponent movie={movie} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default MainData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  seporator: {
    margin: 5,
  },
});
