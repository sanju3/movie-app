import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import Header from '../components/Header';
import {removeValue} from '../storage';
import MainData from './Main/MainData';
import styles from './Main.css';

const Main = ({history}) => {
  const logout = async () => {
    await removeValue('auth');
    await removeValue('state');
    history.push('/login');
  };
  return (
    <View style={styles.root}>
      <Header name="MAIN" />
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => history.push('/add')}
          title="Add new review"
        />
        <Button style={styles.button} onPress={() => logout()} title="Logout" />
        <ScrollView>
          <MainData history={history} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Main;
