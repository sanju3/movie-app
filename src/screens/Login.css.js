import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
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
