import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import {connect} from 'react-redux';
import {loginFromAPI} from '../actions/mainActions';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader/Loader';
import styles from './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isLoged: false,
    };
  }

  changeEmailTextHandler = text => {
    this.setState({email: text});
  };
  changePasswordTextHandler = text => {
    this.setState({password: text});
  };

  loginHandler = () => {
    const {email, password} = this.state;
    if (!(email && password)) {
      this.setState({error: 'Fill all the fields'});
    } else {
      this.props.login({email, password});
      this.setState({isLoged: true});
    }
  };

  componentDidUpdate(pervProps) {
    this.state.isLoged && this.props.data && this.props.history.push('/');
    const {error} = this.props;
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
          <Header name="LOGIN" />
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
              onPress={() => this.loginHandler()}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.element}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => this.props.history.push('/signup')}>
              <Text style={styles.text}>Signup</Text>
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
    login: async credentials => await dispatch(loginFromAPI(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
