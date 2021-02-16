import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {getData} from '../API';
import Header from '../components/Header';
import CustomCard from '../components/CustomCard';
import {ScrollView} from 'react-native';
import ErrorMessage from '../components/ErrorMessage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: {
        errorStatus: false,
        errorMessage: '',
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await getData();
      console.log(data[0].multimedia.src);
      this.setState({
        movies: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: {
          errorStatus: true,
          errorMessage: error.message,
        },
        loading: false,
      });
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <Header name="MAIN" />
        <View style={styles.container}>
          <ScrollView>
            {this.state.loading ? (
              <ActivityIndicator size="large" color="orange" />
            ) : this.state.error.errorStatus ? (
              <ErrorMessage error={this.state.error.errorMessage} />
            ) : (
              this.state.movies.map(movie => (
                <CustomCard
                  key={movie.display_title}
                  movie={movie}
                  navigation={this.props.navigation}
                />
              ))
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 10,
  },
});
