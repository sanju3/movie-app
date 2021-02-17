import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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
          <ScrollView>
            {this.state.movies.map(movie => (
              <CustomCardComponent key={movie.display_title} movie={movie} />
            ))}
          </ScrollView>
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
  },
  container: {
    marginHorizontal: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
});
