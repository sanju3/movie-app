import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    margin: 10,
    marginBottom: 40,
    width: Platform.OS === 'web' ? '40%' : '100%',
  },
  element: {
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
});
