import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
    width: Platform.OS === 'web' ? '40%' : '100%',
    height: 700,
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageContainer: {
    height: '30%',
    marginBottom: 10,
  },
  summary: {
    marginBottom: 10,
  },
  byline: {
    marginBottom: 10,
  },
  publicationDate: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});
