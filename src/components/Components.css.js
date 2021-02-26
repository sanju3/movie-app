import {StyleSheet} from 'react-native';

export const stylesCD = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const stylesEM = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export const stylesHeader = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export const stylesIB = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  textField: {
    width: '100%',
  },
  upText: {
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textColor: {color: 'red'},
});
