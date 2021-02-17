import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';
import MainData from './Main/MainData';
import {connect} from 'react-redux';
import {getDataFromAPI} from '../actions/mainActions';
import Loader from '../components/Loader/Loader';

class Main extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <View style={styles.root}>
        <Header name="MAIN" />
        <View style={styles.container}>
          {this.props.loading ? <Loader /> : null}
          <ScrollView>
            {this.props.error ? (
              <ErrorMessage error={this.props.error} />
            ) : null}

            {this.props.data ? <MainData movies={this.props.data} /> : null}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.main.loading,
    data: state.main.data,
    error: state.main.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: async () => await dispatch(getDataFromAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 35,
    marginBottom: 30,
    justifyContent: 'center',
  },
});
