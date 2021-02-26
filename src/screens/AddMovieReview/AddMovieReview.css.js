import {StyleSheet} from 'react-native';

export const stylesWeb = StyleSheet.create({
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
    margin: 10,
    width: '40%',
    alignItems: 'center',
    padding: 10,
  },
  element: {
    width: '70%',
    marginBottom: 10,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    margin: 10,
    marginBottom: 40,
  },
  element: {
    marginBottom: 10,
  },
  elementButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
});
