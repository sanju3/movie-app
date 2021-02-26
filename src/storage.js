import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    //console.log(jsonValue);
    await AsyncStorage.setItem(`@${key}`, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getDataLocal = async key => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    console.log(e);
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
  } catch (e) {
    console.log(e);
  }

  console.log('Done.');
};
