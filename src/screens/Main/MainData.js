import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomCard from '../../components/CustomCard/CustomCard';

class MainData extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <ScrollView>
            {this.props.movies.map(movie => (
              <CustomCard
                key={movie.display_title}
                movie={movie}
                history={this.props.history}
                delete={this.props.delete}
              />
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
    marginBottom: 30,
    alignItems: 'center',
  },
});
