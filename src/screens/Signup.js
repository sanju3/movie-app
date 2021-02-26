import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import {connect} from 'react-redux';
import {signupFromAPI} from '../actions/mainActions';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader/Loader';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  changeEmailTextHandler = text => {
    this.setState({email: text});
  };
  changePasswordTextHandler = text => {
    this.setState({password: text});
  };

  signupHandler = () => {
    const {email, password} = this.state;
    if (!(email && password)) {
      this.setState({error: 'Fill all the fields'});
    } else {
      this.props.signup({email, password});
    }
  };

  componentDidUpdate(pervProps) {
    const {data, error, history} = this.props;
    if (data) {
      history.push('/');
    }
    if (error && error !== this.state.error && pervProps.error !== error) {
      this.setState({error: error}); // eslint-disable-line react/no-did-update-set-state
    }
  }

  render() {
    const {email, password, error} = this.state;
    const {loading} = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Header name="SIGNUP" />
        </View>
        <View style={styles.container}>
          <View style={styles.element}>
            <Text>{error && <ErrorMessage error={error} />}</Text>
          </View>

          <View style={styles.element}>
            <InputBox
              textTitle="Email"
              textValue={email}
              changeValue={this.changeEmailTextHandler}
            />
          </View>
          {loading && <Loader />}
          <View style={styles.element}>
            <InputBox
              secure={true}
              textTitle="Password"
              textValue={password}
              changeValue={this.changePasswordTextHandler}
            />
          </View>
          <View style={styles.element}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.signupHandler()}>
              <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.element}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.props.history.push('/login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    data: state.auth.data,
    error: state.auth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: async credentials => await dispatch(signupFromAPI(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    height: 40,
    width: '100%',
  },
  container: {
    marginTop: Platform.OS === 'android' ? '20%' : '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  element: {
    width: Platform.OS === 'android' ? '80%' : '40%',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
