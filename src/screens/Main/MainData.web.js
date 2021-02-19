import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomCard from '../../components/CustomCard/CustomCard';

class MainData extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          {this.props.movies.map(movie => (
            <View style={styles.seporator} key={movie.display_title}>
              <CustomCard
                movie={movie}
                history={this.props.history}
                delete={this.props.delete}
              />
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
    marginLeft: 35,
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
