import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    width: 175,
    height: 300,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  container: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    borderBottomColor: 'black',
    height: 30,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  body: {
    marginBottom: 15,
    height: 60,
  },
  imageDim: {
    width: '100%',
    height: 100,
  },
  dangerButton: {
    backgroundColor: '#d95950',
    padding: 10,
    borderRadius: 5,
    width: '49%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '49%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
});
