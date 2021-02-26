import {StyleSheet} from 'react-native';

export const stylesWeb = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    width: '40%',
    height: '40%',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageDim: {
    width: 400,
    height: 250,
    marginBottom: 5,
  },
  primaryButton: {
    backgroundColor: '#419cd1',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
  },
  summary: {
    width: '90%',
    marginBottom: 5,
  },
  byline: {
    width: '90%',
    marginBottom: 5,
  },
  date: {
    width: '90%',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flex: 1,
  },
});

export const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
  },
  container: {
    margin: 10,
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
  },
  text: {
    color: 'white',
  },
});
